import {KeyboardTypeOptions, Text, TextInput, View} from 'react-native';
import React from 'react';
import tw from 'twrnc';

interface CustomInputProps {
  title: string;
  placeHolder: string;
  value: string;
  onChangeText: (event: any) => void;
  keyboardType?: KeyboardTypeOptions;
}
const CustomInput = (props: CustomInputProps) => {
  const {
    title,
    placeHolder,
    value,
    onChangeText,
    keyboardType = 'default',
  } = props;

  return (
    <View style={[tw`mb-5`]}>
      <Text style={[tw`mb-2 text-black text-sm`]}>{title}</Text>
      <TextInput
        placeholder={placeHolder}
        style={[tw`border border-gray-300 px-4 rounded-lg`]}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default CustomInput;
