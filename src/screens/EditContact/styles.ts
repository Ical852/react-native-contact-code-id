import {StyleSheet} from 'react-native';
import {colors} from '../../utils';

export const styles = StyleSheet.create<any>({
  saveBtn: (disabled: boolean) => ({
    backgroundColor: colors.primary,
    opacity: disabled ? 0.3 : 1,
  }),
});
