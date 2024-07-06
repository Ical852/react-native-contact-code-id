import {Dimensions, StyleSheet} from 'react-native';
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

    marginTop: 13,
    marginRight: 13,
    borderRadius: 8
  }
});
