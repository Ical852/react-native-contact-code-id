import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import tw from 'twrnc';

import {styles} from './styles';
import { Contact } from '../../../types';

interface ContacCardProps {
  contact: Contact;
  onDetail: () => void;
}
const ContactCard = (props: ContacCardProps) => {
  const {contact, onDetail} = props;
  const {firstName, lastName, age, photo} = contact;

  return (
    <TouchableOpacity
      onPress={onDetail}
      activeOpacity={0.7}
      style={[tw`rounded-xl mb-5 mx-5 p-4 flex-row items-center`, styles.container]}>
      <Image
        style={[tw`rounded-xl`, styles.photo]}
        source={{ uri: photo }}
      />
      <View style={[tw`h-full ml-4 flex-1`]}>
        <View style={[tw`rounded py-1 px-2 self-start mb-2`, styles.badge]}>
          <Text style={[tw``, styles.badgeText]}>New</Text>
        </View>
        <View style={[tw`flex-1`]}>
          <Text
            numberOfLines={1} 
            style={[tw`text-base text-black font-bold`]}>
            {`${firstName} ${lastName}`}
          </Text>
          <Text
            numberOfLines={2}
            style={[tw`text-gray-400 mt-2`, styles.desc]}>
            {`${firstName} ${lastName}`} is your new contact, click the detail so the contact detail
          </Text>
          <View style={[tw`flex-1 flex-row items-center justify-between mt-2`]}>
            <Text style={[tw`text-sm font-bold`, styles.ageTitle]}>Age : {age}</Text>
            <TouchableOpacity 
              onPress={onDetail}
              activeOpacity={0.7}
              style={[tw`rounded-full`, styles.detailBtn]}>
              <Text style={[tw`py-1 px-5 text-white font-semibold`, styles.dtlText]}>Detail</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ContactCard;
