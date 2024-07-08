import {useCallback, useMemo, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {constants} from '../../utils';
import {Contact, SearchScreenProps} from '../../types';

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
      (fil: Contact) => {
        const name = fil?.firstName + " " + fil?.lastName
        return name?.toLowerCase()?.includes(search.toLowerCase()) ||
          fil?.age?.toString()?.includes(search);
      }
    );
  }, [search]);

  const onDetail = useCallback(
    (data: Contact) => {
      navigation.navigate('DetailContact', data);
    },
    [navigation],
  );
  const onBack = useCallback(() => {
    navigation.goBack();
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

  return {
    userImg,
    loading: getAllContactLoading,
    getAllContactError,
    data: filtered || getAllContactResponse?.data || [],
    fetchAllContacts,
    search,
    setSearch,
    onDetail,
    onBack,
  };
};
