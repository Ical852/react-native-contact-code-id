import React from 'react';
import {connect} from 'react-redux';
import {Text, View} from 'react-native';

import {AppDispatch, RootState} from '../../redux/store';
import {styles} from './styles';

const DetailContact: React.FC<any> = props => {
  return (
    <View>
      <Text>DetailContact</Text>
    </View>
  );
};

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = (dispatch: AppDispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DetailContact);
