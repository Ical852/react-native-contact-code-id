import React, { useMemo } from 'react';
import {connect} from 'react-redux';
import {ActivityIndicator, Image, Text, TouchableOpacity, View} from 'react-native';
import tw from 'twrnc';

import {
  deleteContact,
  deleteContactReset,
} from '../../redux/contact/actions';

import {AppDispatch, RootState} from '../../redux/store';
import { IconEdit, IconTrash } from '../../assets';
import { Header } from '../../components';
import { useDetail } from './useDetail';
import {styles} from './styles';

const DetailContact: React.FC<any> = props => {
  const dtl = useDetail(props);

  const _renderHeader = useMemo(() => {
    return <Header title="Contact Detail" onBack={dtl.onBack} />
  }, []);

  const _renderContent = useMemo(() => {
    return (
      <View style={[tw`mx-6`]}>
        <Image
          style={[tw`h-60 w-full rounded-xl`]}
          source={{ uri: dtl.detail.photo }}
        />
        <View style={[tw`flex-row items-center justify-between mt-6`]}>
          <View>
            <Text numberOfLines={2} style={[tw`text-lg text-black font-semibold`]}>
              {dtl.fullName}
            </Text>
            <View style={[tw`flex-row items-center`]}>
              <View style={[tw`rounded py-1 px-2 self-start`, styles.badge]}>
                <Text style={[tw``, styles.badgeText]}>New</Text>
              </View>
              <Text style={[tw`ml-2 font-semibold`, styles.age]}>Age : {dtl.detail.age}</Text>
            </View>
          </View>
          <TouchableOpacity
            disabled={dtl.loading}
            onPress={dtl.onDelete}
            activeOpacity={0.7}
            style={[tw`rounded-full justify-center items-center`, styles.delBtn]}>
            {dtl.loading ? <ActivityIndicator size="large" color={'white'} /> : <IconTrash />}
          </TouchableOpacity>
        </View>
        <View style={[tw`mt-6`]}>
          <Text style={[tw`text-sm text-black font-medium`]}>Detail Contact</Text>
          <Text style={[tw`mt-2 text-gray-400 font-normal`]}>
            {`${dtl.fullName}`} is your new contact, he/she is {dtl.detail.age}, you can edit her/his contact
            by click the edit contact down below. And you can also delete this contact by tap on the
            delete button beside the contact name.
          </Text>
        </View>
      </View>
    )
  }, [dtl.detail, dtl.loading]);

  const _renderAddButton = React.useMemo(() => {
    return (
      <TouchableOpacity
        disabled={dtl.loading}
        onPress={() => dtl.onEdit(dtl.detail)}
        activeOpacity={0.7}
        style={[
          tw`absolute h-12 justify-center items-center rounded-md flex-row`,
          styles.addBtn,
        ]}>
        <IconEdit/>
        <Text style={[tw`text-white font-semibold ml-3`]}>Edit Contact</Text>
      </TouchableOpacity>
    );
  }, [dtl.onEdit, dtl.detail, dtl.loading]);

  return (
    <View style={[tw`flex-1 bg-white`]}>
      {_renderHeader}
      {_renderContent}
      {_renderAddButton}
    </View>
  );
};

const mapStateToProps = (state: RootState) => ({
  deleteContactLoading: state.contact.deleteContactLoading,
  deleteContactError: state.contact.deleteContactError,
  deleteContactSuccess: state.contact.deleteContactSuccess,
  deleteContactResponse: state.contact.deleteContactResponse,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  deleteContact: (payload: any) => dispatch(deleteContact(payload)),
  deleteContactReset: () => dispatch(deleteContactReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailContact);
