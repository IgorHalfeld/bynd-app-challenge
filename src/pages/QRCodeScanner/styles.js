import { StyleSheet, Dimensions } from 'react-native';
import colors from '~/utils/colors';

const {
  width: fullWidth,
  height: fullHeight,
} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
  cameraStyle: {
    height: fullHeight,
  },
  topContentContainer: {
    height: 0,
  },
  bottomContentContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: fullWidth,
    paddingTop: 15,
    backgroundColor: colors.gray[2],
    height: 270,
  },
  text: {
    color: colors.gray[8],
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    width: fullWidth / 1.1,
  },
  textDesc: {
    color: colors.gray[7],
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
    width: fullWidth / 1.1,
  },
});
