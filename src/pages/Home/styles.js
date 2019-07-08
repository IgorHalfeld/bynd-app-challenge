import { StyleSheet, Dimensions } from 'react-native';
import colors from '~/utils/colors';

export default StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.gray[1],
    flex: 1,
  },
  title: {
    color: colors.gray[0],
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  text: {
    color: colors.gray[0],
    fontSize: 23,
    textAlign: 'center',
    fontWeight: '400',
  },
  logo: {
    height: Dimensions.get('window').height * 0.11,
    width: Dimensions.get('window').height * 0.11 * (1950 / 662),
  },
  button: {
    width: Dimensions.get('window').height * 0.11 * (1950 / 662),
    backgroundColor: colors.indigo[3],
  },
});
