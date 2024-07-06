import {StyleSheet} from 'react-native';
import { colors } from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    height: 150,

    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  photo: {
    width: 118,
    height: 118,
  },
  badge: {
    backgroundColor: colors.primary
  },
  badgeText: {
    fontSize: 10,
    color: 'white'
  },
  desc: {
    fontSize: 10
  },
  detailBtn: {
    backgroundColor: colors.primary
  },
  ageTitle: {
    color: colors.primary
  },
  dtlText: {
    fontSize: 10
  }
});
