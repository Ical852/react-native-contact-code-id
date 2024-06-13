import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import tw from 'twrnc';

import {styles} from './styles';
import {constants} from '../../../utils';

interface ContacCardProps {
  fullName: string;
  age: string;
  onDelete: () => void;
  onEdit: () => void;
}
const ContactCard = (props: ContacCardProps) => {
  const img = constants.pubUrl;
  const {fullName, age, onDelete, onEdit} = props;

  return (
    <View style={[tw`h-36 rounded-xl mb-5 mx-5 p-5`, styles.container]}>
      <View style={[tw`flex-row items-center`]}>
        <Image source={{uri: img}} style={[tw`h-12 w-12 rounded-full`]} />
        <View style={[tw`flex-1 ml-3`]}>
          <Text style={[tw`text-lg text-black font-bold`]}>{fullName}</Text>
          <Text style={[tw`text-sm text-gray-400`]}>Age : {age}</Text>
        </View>
      </View>
      <View style={[tw`h-px w-full bg-gray-200 my-4`]} />
      <View style={[tw`flex-row`]}>
        <TouchableOpacity
          onPress={onDelete}
          activeOpacity={0.5}
          style={[tw`bg-red-400 py-1 px-3 rounded-md`]}>
          <Text style={[tw`text-white text-sm font-semibold`]}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onEdit}
          activeOpacity={0.5}
          style={[tw`bg-lime-400 py-1 px-3 rounded-md ml-3`]}>
          <Text style={[tw`text-white text-sm font-semibold`]}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ContactCard;
