import {useCallback, useMemo, useState} from 'react';
import {constants} from '../../utils';
import {Contact, SearchScreenProps} from '../../types';
import {useFocusEffect} from '@react-navigation/native';

export const useSearch = (props: SearchScreenProps) => {
  const {
    navigation,

    getAllContact,
    getAllContactLoading,
    getAllContactError,
    getAllContactResponse,
  } = props;
  const userImg = constants.pubUrl;

  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return getAllContactResponse?.data?.filter(
      (fil: Contact) =>
        fil?.firstName?.toLowerCase()?.includes(search) ||
        fil?.lastName?.toLowerCase()?.includes(search) ||
        fil?.age?.toString()?.includes(search),
    );
  }, [search]);

  const onDetail = useCallback(
    (data: Contact) => {
      navigation.navigate('DetailContact', data);
    },
    [navigation],
  );
  
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
    loading: getAllContactLoading,
    getAllContactError,
    data: filtered || getAllContactResponse?.data || [],
    fetchAllContacts,
    search,
    setSearch,
    onDetail,
  };
};
