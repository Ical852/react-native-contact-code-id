import { useCallback, useEffect, useMemo } from "react";
import { Contact, DetailScreenProps } from "../../types/modules/contacts";
import { Alert } from "react-native";
import { showMessage } from "react-native-flash-message";

export const useDetail = (props: DetailScreenProps) => {
  const {
    navigation,

    deleteContact,
    deleteContactReset,
    deleteContactLoading,
    deleteContactError,
    deleteContactSuccess,
    deleteContactResponse,

    route: {params},
  } = props;

  const fullName = useMemo(() => (`${params.firstName} ${params.lastName}`), [params]);

  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  const onDelete = useCallback(() => {
    Alert.alert('Confirm', 'Are you sure want to delete this contact?', [
      {
        text: 'Yes',
        onPress: () => {
          deleteContact(params);
        },
      },
      {
        text: 'No',
        onPress: () => {
          console.log('No Pressed');
        },
      },
    ]);
  }, [params]);
  const onEdit = useCallback(
    (data: Contact) => {
      navigation.navigate('EditContact', data);
    },
    [navigation],
  );

  useEffect(() => {
    if (deleteContactError) {
      showMessage({
        message: 'Delete Contact Failed',
        description: 'Failed to delete the contact',
        type: 'danger',
      });
      deleteContactReset();
      setTimeout(() => {
        navigation.goBack();
      }, 500);
    }
    if (deleteContactSuccess) {
      showMessage({
        message: 'Delete Contact Success',
        description: 'Success to delete the contact',
        type: 'success',
      });
      deleteContactReset();
      setTimeout(() => {
        navigation.goBack();
      }, 500);
    }
    return;
  }, [deleteContactResponse]);

  return {
    fullName,
    loading: deleteContactLoading,
    onBack,
    onDelete,
    onEdit,
    detail: params,
  };
}