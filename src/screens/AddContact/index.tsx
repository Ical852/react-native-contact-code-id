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

import {saveContact, saveContactReset} from '../../redux/contact/actions';
import {AppDispatch, RootState} from '../../redux/store';

import {styles} from './styles';
import {useAdd} from './useAdd';
import {AddScreenProps} from '../../types';

const AddContact: React.FC<AddScreenProps> = props => {
  const add = useAdd(props);

  return (
    <View style={[tw`bg-white flex-1 w-full h-full`]}>
      <Header title="Add Contact" onBack={() => add.navigation.goBack()} />
      <ScrollView
        style={[tw`mx-5 mt-8 flex-1`]}
        showsVerticalScrollIndicator={false}>
        <CustomInput
          title="First Name"
          value={add.firstName}
          placeHolder="Fill your first name"
          onChangeText={value => add.setFirstName(value)}
        />
        <CustomInput
          title="Last Name"
          value={add.lastName}
          placeHolder="Fill your last name"
          onChangeText={value => add.setLastName(value)}
        />
        <CustomInput
          title="Age"
          value={add.age}
          placeHolder="Fill your age"
          onChangeText={value => add.setAge(value)}
        />
        <CustomInput
          title="Photo"
          value={add.photo}
          placeHolder="Fill your photo url"
          onChangeText={value => add.setPhoto(value)}
        />
        <Gap height={100} />
      </ScrollView>
      <TouchableOpacity
        onPress={add.onSubmit}
        disabled={add.disabledSubmit || add.saveContactLoading}
        style={[
          tw`absolute left-5 right-5 bottom-8 h-12 justify-center items-center rounded-md`,
          styles.saveBtn(add.disabledSubmit),
        ]}>
        {add.saveContactLoading ? (
          <ActivityIndicator size={30} />
        ) : (
          <Text style={[tw`text-white font-semibold`]}>Save Contact</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state: RootState) => ({
  saveContactLoading: state.contact.saveContactLoading,
  saveContactError: state.contact.saveContactError,
  saveContactSuccess: state.contact.saveContactSuccess,
  saveContactResponse: state.contact.saveContactResponse,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  saveContact: (payload: any) => dispatch(saveContact(payload)),
  saveContactReset: () => dispatch(saveContactReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);
