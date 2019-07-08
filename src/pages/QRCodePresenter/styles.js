import { StyleSheet, Dimensions } from 'react-native';
import colors from '~/utils/colors';

export default StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
  text: {
    marginTop: 40,
    color: colors.gray[8],
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    width: Dimensions.get('window').width / 1.1,
  },
  textDesc: {
    color: colors.gray[4],
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
    width: Dimensions.get('window').width / 1.1,
  },
});
