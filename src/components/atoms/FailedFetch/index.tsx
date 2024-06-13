import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import tw from 'twrnc';

interface FailedFetchProps {
  onRefresh: () => void;
}
const FailedFetch = (props: FailedFetchProps) => {
  const {onRefresh} = props;

  return (
    <View style={styles.container}>
      <Icon name="warning" color={'red'} size={50} />
      <Text style={tw`text-lg text-red-400 font-semibold mt-3`}>
        Something Went Wrong, Try Again
      </Text>
      <TouchableOpacity
        onPress={onRefresh}
        style={[tw`mt-5 px-5 py-3 rounded-md bg-red-400`]}>
        <Text style={[tw`text-white text-sm font-semibold`]}>Refresh</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FailedFetch;
