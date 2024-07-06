import {Dimensions, StyleSheet} from 'react-native';
import { colors } from '../../../utils';

export const styles = StyleSheet.create({
  card: {
    height: 264,
    width: Dimensions.get('window').width / 2 - 24,
    
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,

    marginTop: 14,
    marginRight: 14,
    borderRadius: 8
  },
  img: {
    height: 137
  },
  badge: {
    backgroundColor: colors.primary
  },
  badgeText: {
    fontSize: 10,
    color: 'white'
  },

  detailBtn: {
    backgroundColor: colors.primary
  },
  ageTitle: {
    color: colors.primary
  },
  dtlText: {
    fontSize: 10
  },
  desc: {
    fontSize: 10
  },
});
 