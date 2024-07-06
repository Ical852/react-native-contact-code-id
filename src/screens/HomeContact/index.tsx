import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import tw from 'twrnc';

import {IconSearch} from '../../assets';
import {ContactCard, FailedFetch, Gap, Loading} from '../../components';
import {AppDispatch, RootState} from '../../redux/store';

import {
  getAllContact,
} from '../../redux/contact/actions';
import {Contact, HomeScreenProps} from '../../types';
import {styles} from './styles';
import {useHome} from './useHome';

const HomeContact: React.FC<HomeScreenProps> = props => {
  const home = useHome(props);

  const _renderHomeHeader = React.useMemo(() => {
    return (
      <View style={[tw`items-center p-6 rounded-b-xl`, styles.header]}>
        <View style={[tw`flex-row items-center justify-between w-full`]}>
          <View style={[styles.topTitle]}>
            <Text style={[tw`text-2xl font-bold text-white`]}>Hello,</Text>
            <Text style={[tw`text-2xl font-bold text-white`]}>User Contact Apps</Text>
          </View>
          <View
            style={[
              tw`h-14 w-14 rounded-full justify-center items-center bg-white`,
            ]}>
            <Image
              source={{uri: home.userImg}}
              style={[tw`w-12 h-12 rounded-full`]}
            />
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={home.onSearch}
          style={[tw`mt-3 px-3 flex-row items-center w-full h-10 bg-white rounded rounded-lg`]}>
          <IconSearch />
          <Text style={[tw`ml-3`]}>Search your contact here</Text>
        </TouchableOpacity>
      </View>
    );
  }, []);

  const _renderContactList = React.useMemo(() => {
    if (home.loading) return <Loading />;
    if (home.getAllContactError) {
      return <FailedFetch onRefresh={home.fetchAllContacts} />;
    }

    return (
      <ScrollView showsVerticalScrollIndicator={false} style={[tw`flex-1`]}>
        <Gap height={24} />
        <View style={[tw`mx-5`]}>
          <Text style={[tw`text-black text-sm font-bold`]}>All Contacts</Text>
          <Text style={[tw`text-grey-300 text-xs font-normal mt-0.5`]}>All contacts from contact apps</Text>
        </View>
        <Gap height={24} />
        {home.data?.map((data: Contact) => (
          <ContactCard
            key={data.id}
            contact={data}
          />
        ))}
        <Gap height={100} />
      </ScrollView>
    );
  }, [
    home.loading,
    home.data,
    home.getAllContactError,
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
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  getAllContact: () => dispatch(getAllContact()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContact);
