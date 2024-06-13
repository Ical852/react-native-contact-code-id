import {useCallback, useEffect, useMemo, useState} from 'react';
import {EditScreenProps} from '../../types';
import {showMessage} from 'react-native-flash-message';

export const useEdit = (props: EditScreenProps) => {
  const {
    navigation,
    updateContact,
    updateContactReset,
    updateContactLoading,
    updateContactError,
    updateContactSuccess,
    updateContactResponse,
    route: {params},
  } = props;
  const [firstName, setFirstName] = useState(params.firstName);
  const [lastName, setLastName] = useState(params.lastName);
  const [age, setAge] = useState(params.age.toString());
  const [photo, setPhoto] = useState(params.photo);

  const disabledSubmit = useMemo(() => {
    return !firstName || !lastName || !age || !photo;
  }, [firstName, lastName, age, photo]);

  const onSubmit = useCallback(() => {
    updateContact({
      firstName,
      lastName,
      age,
      photo,
      id: params.id,
    });
    setFirstName('');
    setLastName('');
    setAge('');
    setPhoto('');
  }, [disabledSubmit, params]);

  useEffect(() => {}, []);

  useEffect(() => {
    if (updateContactError) {
      showMessage({
        message: 'Update Contact Failed',
        description: 'Failed to update the contact',
        type: 'danger',
      });
      updateContactReset();
      setTimeout(() => {
        navigation.goBack();
      }, 1000);
    }
    if (updateContactSuccess) {
      showMessage({
        message: 'Update Contact Success',
        description: 'Success to update the contact',
        type: 'success',
      });
      updateContactReset();
      setTimeout(() => {
        navigation.goBack();
      }, 1000);
    }
    return;
  }, [updateContactResponse]);

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
    updateContactLoading,
  };
};
