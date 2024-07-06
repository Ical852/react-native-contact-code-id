import { useCallback, useEffect } from "react";
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

    route: {params}
  } = props;

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
    loading: deleteContactLoading,
    onDelete,
    onEdit,
  };
}