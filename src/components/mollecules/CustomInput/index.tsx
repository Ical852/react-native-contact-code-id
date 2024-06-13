import {Text, TextInput, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import tw from 'twrnc';

interface CustomInputProps {
  title: string;
  placeHolder: string;
  value: string;
  onChangeText: (event: any) => void;
}
const CustomInput = (props: CustomInputProps) => {
  const {title, placeHolder, value, onChangeText} = props;

  return (
    <View style={[tw`mb-5`]}>
      <Text style={[tw`mb-2 text-black text-sm`]}>{title}</Text>
      <TextInput
        placeholder={placeHolder}
        style={[tw`border border-gray-300 px-4 rounded-lg`]}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default CustomInput;
