import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import tw from 'twrnc';

import {styles} from './styles';
import {constants} from '../../../utils';
import { Contact } from '../../../types';

interface ContacCardProps {
  contact: Contact;
}
const ContactCard = (props: ContacCardProps) => {
  const img = constants.pubUrl;
  const {contact} = props;
  const {firstName, lastName, age, photo} = contact;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[tw`rounded-xl mb-5 mx-5 p-3`, styles.container]}>
      
    </TouchableOpacity>
  );
};

export default ContactCard;
