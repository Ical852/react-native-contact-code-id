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
  } = props;
  const userImg = constants.pubUrl;

  const [focus, setFocus] = useState(false);
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return getAllContactResponse?.data?.filter(
      (fil: Contact) =>
        fil?.firstName?.toLowerCase()?.includes(search) ||
        fil?.lastName?.toLowerCase()?.includes(search) ||
        fil?.age?.toString()?.includes(search),
    );
  }, [search]);

  const onAddBtn = useCallback(() => {
    navigation.navigate('AddContact');
  }, [navigation]);
  const fetchAllContacts = useCallback(() => {
    getAllContact();
  }, []);
  const onSearch = useCallback(
    () => {
      
    },
    [],
  )
  

  useFocusEffect(
    useCallback(() => {
      fetchAllContacts();
      return () => {};
    }, []),
  );

  return {
    userImg,
    focus,
    setFocus,
    onAddBtn,
    loading: getAllContactLoading,
    getAllContactError,
    data: filtered || getAllContactResponse?.data || [],
    fetchAllContacts,
    search,
    setSearch,
    onSearch,
  };
};
