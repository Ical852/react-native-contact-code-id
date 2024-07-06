import {StyleSheet} from 'react-native';
import {colors} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    height: 72,
    backgroundColor: colors.primary
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 32
  }
});