import React from 'react';
import {connect} from 'react-redux';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CustomInput, Gap, Header} from '../../components';
import tw from 'twrnc';

import {updateContact, updateContactReset} from '../../redux/contact/actions';
import {AppDispatch, RootState} from '../../redux/store';

import {styles} from './styles';
import {useEdit} from './useEdit';
import {EditScreenProps} from '../../types';

const EditContact: React.FC<EditScreenProps> = props => {
  const edit = useEdit(props);

  return (
    <View style={[tw`bg-white flex-1 w-full h-full`]}>
      <Header title="Edit Contact" onBack={() => edit.navigation.goBack()} />
      <ScrollView
        style={[tw`mx-5 mt-8 flex-1`]}
        showsVerticalScrollIndicator={false}>
        <CustomInput
          title="First Name"
          value={edit.firstName}
          placeHolder="Fill your first name"
          onChangeText={value => edit.setFirstName(value)}
        />
        <CustomInput
          title="Last Name"
          value={edit.lastName}
          placeHolder="Fill your last name"
          onChangeText={value => edit.setLastName(value)}
        />
        <CustomInput
          title="Age"
          value={edit.age}
          placeHolder="Fill your age"
          onChangeText={value => edit.setAge(value)}
        />
        <CustomInput
          title="Photo"
          value={edit.photo}
          placeHolder="Fill your photo url"
          onChangeText={value => edit.setPhoto(value)}
        />
        <Gap height={100} />
      </ScrollView>
      <TouchableOpacity
        onPress={edit.onSubmit}
        disabled={edit.disabledSubmit || edit.updateContactLoading}
        style={[
          tw`absolute left-5 right-5 bottom-8 h-12 justify-center items-center rounded-md`,
          styles.saveBtn(edit.disabledSubmit),
        ]}>
        {edit.updateContactLoading ? (
          <ActivityIndicator size={30} />
        ) : (
          <Text style={[tw`text-white font-semibold`]}>Update Contact</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state: RootState) => ({
  updateContactLoading: state.contact.updateContactLoading,
  updateContactError: state.contact.updateContactError,
  updateContactSuccess: state.contact.updateContactSuccess,
  updateContactResponse: state.contact.updateContactResponse,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  updateContact: (payload: any) => dispatch(updateContact(payload)),
  updateContactReset: () => dispatch(updateContactReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditContact);
