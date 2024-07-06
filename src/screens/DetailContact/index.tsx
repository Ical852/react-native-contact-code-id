import React from 'react';
import {connect} from 'react-redux';
import {Text, View} from 'react-native';

import {
  deleteContact,
  deleteContactReset,
} from '../../redux/contact/actions';

import {AppDispatch, RootState} from '../../redux/store';
import {styles} from './styles';
import { useDetail } from './useDetail';

const DetailContact: React.FC<any> = props => {
  const dtl = useDetail(props);

  return (
    <View>
      <Text>DetailContact</Text>
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
