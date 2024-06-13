import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import tw from 'twrnc';

import {colors} from '../../utils';
import {IconSearch} from '../../assets';
import {ContactCard, FailedFetch, Gap, Loading} from '../../components';
import {AppDispatch, RootState} from '../../redux/store';

import {
  getAllContact,
  deleteContact,
  deleteContactReset,
} from '../../redux/contact/actions';
import {Contact, HomeScreenProps} from '../../types';
import {styles} from './styles';
import {useHome} from './useHome';

const HomeContact: React.FC<HomeScreenProps> = props => {
  const home = useHome(props);

  const _renderHomeHeader = React.useMemo(() => {
    return (
      <View style={[tw`m-5 flex-row items-center justify-between`]}>
        <View>
          <Text style={[tw`text-sm text-gray-500`]}>Hello</Text>
          <Text style={[tw`text-lg font-bold text-black`]}>Hi User</Text>
        </View>
        <View
          style={[
            tw`h-20 w-20 rounded-full justify-center items-center`,
            {backgroundColor: colors.primary},
          ]}>
          <Image
            source={{uri: home.userImg}}
            style={[tw`w-16 h-16 rounded-full`]}
          />
        </View>
      </View>
    );
  }, []);

  const _renderSearchBar = React.useMemo(() => {
    return (
      <View
        style={[
          tw`flex-row items-center mx-5 border px-4 rounded-xl`,
          styles.searchCont(home.focus),
        ]}>
        <IconSearch />
        <TextInput
          style={[tw`flex-1 ml-2`]}
          placeholder="Search contact"
          onFocus={() => home.setFocus(true)}
          onEndEditing={() => home.setFocus(false)}
          value={home.search}
          onChangeText={(text: any) => home.setSearch(text)}
        />
      </View>
    );
  }, [home.focus, home.search]);

  const _renderContactList = React.useMemo(() => {
    if (home.loading) return <Loading />;
    if (home.getAllContactError) {
      return <FailedFetch onRefresh={home.fetchAllContacts} />;
    }

    return (
      <ScrollView showsVerticalScrollIndicator={false} style={[tw`flex-1`]}>
        {_renderSearchBar}
        <Gap height={24} />
        {home.data?.map((data: Contact) => (
          <ContactCard
            key={data.id}
            fullName={`${data.firstName || ''} ${data.lastName || ''}`}
            age={data.age}
            onDelete={() => home.onDelete(data)}
            onEdit={() => home.onEdit(data)}
          />
        ))}
        <Gap height={100} />
      </ScrollView>
    );
  }, [
    home.loading,
    home.data,
    home.getAllContactError,
    _renderSearchBar,
    home.onDelete,
  ]);

  const _renderAddButton = React.useMemo(() => {
    return (
      <TouchableOpacity
        onPress={home.onAddBtn}
        activeOpacity={0.7}
        style={[
          tw`absolute h-12 justify-center items-center rounded-md`,
          styles.addBtn,
        ]}>
        <Text style={[tw`text-white font-semibold`]}>Add New Contact</Text>
      </TouchableOpacity>
    );
  }, [home.onAddBtn]);

  return (
    <View style={[tw`bg-white w-full h-full flex-1`, styles.container]}>
      {_renderHomeHeader}
      {_renderContactList}
      {_renderAddButton}
    </View>
  );
};

const mapStateToProps = (state: RootState) => ({
  getAllContactLoading: state.contact.getAllContactLoading,
  getAllContactError: state.contact.getAllContactError,
  getAllContactResponse: state.contact.getAllContactResponse,

  deleteContactLoading: state.contact.deleteContactLoading,
  deleteContactError: state.contact.deleteContactError,
  deleteContactSuccess: state.contact.deleteContactSuccess,
  deleteContactResponse: state.contact.deleteContactResponse,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  getAllContact: () => dispatch(getAllContact()),
  deleteContact: (payload: any) => dispatch(deleteContact(payload)),
  deleteContactReset: () => dispatch(deleteContactReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContact);
