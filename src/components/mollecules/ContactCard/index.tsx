import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import tw from 'twrnc';

import {styles} from './styles';
import {constants} from '../../../utils';
import { Contact } from '../../../types';

interface ContacCardProps {
  contact: Contact;
  onDetail: () => void;
}
const ContactCard = (props: ContacCardProps) => {
  const defImg = constants.pubUrl;
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
        <View style={[tw`rounded py-1 px-2`, styles.badge]}>
          <Text style={[tw``, styles.badgeText]}>New</Text>
        </View>
        <View style={[tw`flex-1 bg-black`]}>

        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ContactCard;
