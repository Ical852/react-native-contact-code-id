import {useCallback, useEffect, useMemo, useState} from 'react';
import {showMessage} from 'react-native-flash-message';
import {AddScreenProps} from '../../types';

export const useAdd = (props: AddScreenProps) => {
  const {
    navigation,
    saveContact,
    saveContactReset,
    saveContactLoading,
    saveContactError,
    saveContactSuccess,
    saveContactResponse,
  } = props;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [photo, setPhoto] = useState('');

  const disabledSubmit = useMemo(() => {
    return !firstName || !lastName || !age || !photo;
  }, [firstName, lastName, age, photo]);

  const onSubmit = useCallback(() => {
    saveContact({
      firstName,
      lastName,
      age,
      photo,
    });
    setFirstName('');
    setLastName('');
    setAge('');
    setPhoto('');
  }, [disabledSubmit]);

  useEffect(() => {
    if (saveContactError) {
      showMessage({
        message: 'Save Contact Failed',
        description: 'Failed to save the contact',
        type: 'danger',
      });
      saveContactReset();
    }
    if (saveContactSuccess) {
      showMessage({
        message: 'Save Contact Success',
        description: 'Success to save the contact',
        type: 'success',
      });
      saveContactReset();
      setTimeout(() => {
        navigation.goBack();
      }, 1000);
    }
    return;
  }, [saveContactResponse]);

  return {
    navigation,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    age,
    setAge,
    photo,
    setPhoto,
    disabledSubmit,
    onSubmit,
    saveContactLoading,
  };
};
