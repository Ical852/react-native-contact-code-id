import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {IconBack} from '../../../assets';

interface HeaderProps {
  title: string;
  onBack: () => void;
}
const Header = (props: HeaderProps) => {
  const {title, onBack} = props;

  return (
    <View style={[tw`flex-row items-center justify-between m-5`]}>
      <TouchableOpacity onPress={onBack}>
        <IconBack />
      </TouchableOpacity>
      <Text style={[tw`text-black font-semibold text-base`]}>{title}</Text>
      <View />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
