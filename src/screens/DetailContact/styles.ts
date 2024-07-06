import {StyleSheet} from 'react-native';
import { colors } from '../../utils';

export const styles = StyleSheet.create({
  addBtn: {
    bottom: 32,
    backgroundColor: colors.primary,
    left: 20,
    right: 20,
  },
  delBtn: {
    height: 50,
    width: 50,
    backgroundColor: colors.primary
  },
  badge: {
    backgroundColor: colors.primary,
    marginTop: 3,
  },
  badgeText: {
    fontSize: 10,
    color: 'white'
  },
  age: {
    color: colors.primary
  }
});
