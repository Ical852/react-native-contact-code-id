import { ListRenderItemInfo, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Contact } from '../../../types';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface GridContactCardProps {
  itemMap: ListRenderItemInfo<any>;
  onPress: (detail: Contact) => void;
}
const GridContactCard = (props: GridContactCardProps) => {
  const { itemMap, onPress } = props;
  const { item, index } = itemMap;

  return (
    <TouchableOpacity
      key={index}
      activeOpacity={0.7}
      onPress={() => onPress(item)}
      style={[styles.card]}>
      <Text>{item.firstName}</Text>
    </TouchableOpacity>
  )
}

export default GridContactCard;