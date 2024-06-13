import {StyleSheet} from 'react-native';
import {colors} from '../../utils';

export const styles = StyleSheet.create<any>({
  container: {},
  searchCont: (focus: any) => ({
    borderColor: focus ? colors.primary : '#EEEEEE',
  }),
  addBtn: {
    bottom: 32,
    backgroundColor: colors.primary,
    left: 20,
    right: 20,
  },
});
