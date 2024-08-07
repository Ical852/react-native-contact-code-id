import {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {Contact, HomeScreenProps} from '../../types';
import {constants} from '../../utils';

export const useHome = (props: HomeScreenProps) => {
  const {
    navigation,

    getAllContact,
    getAllContactLoading,
    getAllContactError,
    getAllContactResponse,
  } = props;
  const userImg = constants.pubUrl;

  const onDetail = useCallback(
    (data: Contact) => {
      navigation.navigate('DetailContact', data);
    },
    [navigation],
  );
  const onAddBtn = useCallback(() => {
    navigation.navigate('AddContact');
  }, [navigation]);
  const onSearch = useCallback(
    () => {
      navigation.navigate('SearchContact');
    },
    [navigation],
  )
  const fetchAllContacts = useCallback(() => {
    getAllContact();
  }, []);
  
  useFocusEffect(
    useCallback(() => {
      fetchAllContacts();
      return () => {};
    }, []),
  );

  return {
    userImg,
    onAddBtn,
    loading: getAllContactLoading,
    getAllContactError,
    data: getAllContactResponse?.data || [],
    fetchAllContacts,
    onSearch,
    onDetail,
  };
};
