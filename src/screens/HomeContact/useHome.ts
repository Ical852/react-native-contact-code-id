import {useCallback, useEffect, useMemo, useState} from 'react';
import {constants} from '../../utils';
import {Contact, HomeScreenProps} from '../../types';
import {Alert} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {useFocusEffect} from '@react-navigation/native';

export const useHome = (props: HomeScreenProps) => {
  const {
    navigation,

    getAllContact,
    getAllContactLoading,
    getAllContactError,
    getAllContactResponse,

    deleteContact,
    deleteContactReset,
    deleteContactLoading,
    deleteContactError,
    deleteContactSuccess,
    deleteContactResponse,
  } = props;
  const userImg = constants.pubUrl;

  const [focus, setFocus] = useState(false);
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return getAllContactResponse?.data?.filter(
      (fil: Contact) =>
        fil?.firstName?.toLocaleLowerCase()?.includes(search) ||
        fil?.lastName?.toLocaleLowerCase()?.includes(search) ||
        fil?.age?.toString()?.includes(search),
    );
  }, [search]);

  const onDelete = useCallback((data: Contact) => {
    Alert.alert('Confirm', 'Are you sure want to delete', [
      {
        text: 'Yes',
        onPress: () => {
          deleteContact(data);
        },
      },
      {
        text: 'No',
        onPress: () => {
          console.log('No Pressed');
        },
      },
    ]);
  }, []);
  const onEdit = useCallback(
    (data: Contact) => {
      navigation.navigate('EditContact', data);
    },
    [navigation],
  );
  const onAddBtn = useCallback(() => {
    navigation.navigate('AddContact');
  }, [navigation]);
  const fetchAllContacts = useCallback(() => {
    getAllContact();
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchAllContacts();
      return () => {};
    }, []),
  );

  useEffect(() => {
    if (deleteContactError) {
      showMessage({
        message: 'Delete Contact Failed',
        description: 'Failed to delete the contact',
        type: 'danger',
      });
      deleteContactReset();
    }
    if (deleteContactSuccess) {
      showMessage({
        message: 'Delete Contact Success',
        description: 'Success to delete the contact',
        type: 'success',
      });
      deleteContactReset();
    }
    return;
  }, [deleteContactResponse]);

  return {
    userImg,
    focus,
    setFocus,
    onAddBtn,
    loading: deleteContactLoading || getAllContactLoading,
    getAllContactError,
    data: filtered || getAllContactResponse?.data || [],
    fetchAllContacts,
    search,
    setSearch,
    onDelete,
    onEdit,
  };
};
