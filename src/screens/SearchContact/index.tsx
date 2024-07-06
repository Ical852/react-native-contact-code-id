import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import tw from 'twrnc';

import { IconSearch } from '../../assets';
import { ContactCard, FailedFetch, Gap, Loading } from '../../components';
import { AppDispatch, RootState } from '../../redux/store';

import {
  getAllContact,
} from '../../redux/contact/actions';
import { Contact, SearchScreenProps } from '../../types';
import { styles } from './styles';
import { useSearch } from './useSearch';

const SearchContact: React.FC<SearchScreenProps> = props => {
  const src = useSearch(props);

  return (
    <View style={[tw`bg-white w-full h-full flex-1`, styles.container]}>
      <Text>HORN</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchContact);
