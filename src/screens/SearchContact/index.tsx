import React, { useMemo } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import tw from 'twrnc';

import { IconBack, IconSearch } from '../../assets';
import { FailedFetch, GridContactCard, Loading } from '../../components';
import { AppDispatch, RootState } from '../../redux/store';

import {
  getAllContact,
} from '../../redux/contact/actions';
import { SearchScreenProps } from '../../types';
import { styles } from './styles';
import { useSearch } from './useSearch';
import { TextInput } from 'react-native-gesture-handler';

const SearchContact: React.FC<SearchScreenProps> = props => {
  const src = useSearch(props);

  const _renderSearhHeader = useMemo(() => {
    return (
      <View style={[tw`p-4 flex-row`, styles.header]}>
        <TouchableOpacity 
          onPress={src.onBack}
          activeOpacity={0.7}
          style={[tw`bg-white p-2 rounded-lg`]}>
          <IconBack />
        </TouchableOpacity>
        <View style={[tw`h-10 bg-white rounded-lg flex-1 ml-4 flex-row items-center`]}>
          <TextInput
            style={[tw`flex-1 pl-3`]}
            placeholder='Search contacts here'
            value={src.search}
            onChangeText={(e) => src.setSearch(e)}
          />
          <View style={[tw`mr-4`]}>
            <IconSearch />
          </View>
        </View>
      </View>
    )
  }, [src.search]);

  const _renderContactList = React.useMemo(() => {
    if (src.loading) return <Loading />;
    if (src.getAllContactError) {
      return <FailedFetch onRefresh={src.fetchAllContacts} />;
    }
    if (src.data?.length < 1) {
      return (
        <View style={[tw`flex-1 justify-center items-center`]}>
          <Text style={[tw`text-gray-400 text-base font-semibold`]}>No Contact Found</Text>
        </View>
      )
    }

    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={src.data}
        renderItem={(item) => (
          <GridContactCard 
            itemMap={item}
            onPress={src.onDetail}
          />
        )}
        keyExtractor={item => item.id}
        numColumns={2}
        extraData={src.data}
        contentContainerStyle={styles.listContainer}
      />
    );
  }, [
    src.loading,
    src.data,
    src.getAllContactError,
  ]);

  return (
    <View style={[tw`bg-white w-full h-full flex-1`, styles.container]}>
      {_renderSearhHeader}
      {_renderContactList}
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
