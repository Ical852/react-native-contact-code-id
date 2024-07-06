import React from 'react'
import { Image, ListRenderItemInfo, Text, TouchableOpacity, View } from 'react-native'
import tw from 'twrnc';

import { styles } from './styles'
import { Contact } from '../../../types';

interface GridContactCardProps {
  itemMap: ListRenderItemInfo<any>;
  onPress: (detail: Contact) => void;
}
const GridContactCard = (props: GridContactCardProps) => {
  const { itemMap, onPress } = props;
  const { item, index } = itemMap;
  const { firstName, lastName, photo, age } = item;

  return (
    <TouchableOpacity
      key={index}
      activeOpacity={0.7}
      onPress={() => onPress(item)}
      style={[tw`p-2.5`, styles.card]}>
      <Image
        source={{ uri: photo }}
        style={[tw`w-full rounded`, styles.img]}
      />
      <View style={[tw`flex-1 pt-2.5`]}>
        <View style={[tw`rounded py-1 px-2 self-start mb-2`, styles.badge]}>
          <Text style={[tw``, styles.badgeText]}>New</Text>
        </View>
        <Text 
          numberOfLines={1}
          style={[tw`text-xs text-black font-bold`]}>
          {`${firstName} ${lastName}`}
        </Text>
        <Text
          numberOfLines={1}
          style={[tw`text-gray-400 mt-1`, styles.desc]}>
          {`${firstName} ${lastName}`} contact, click detail
        </Text>
        <View style={[tw`flex-1`]}/>
        <View style={[tw`flex-row items-center justify-between mt-2`]}>
          <Text style={[tw`text-sm font-bold`, styles.ageTitle]}>Age : {age}</Text>
          <TouchableOpacity
            onPress={() => onPress(item)}
            activeOpacity={0.7}
            style={[tw`rounded-full`, styles.detailBtn]}>
            <Text style={[tw`py-1 px-5 text-white font-semibold`, styles.dtlText]}>Detail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default GridContactCard;