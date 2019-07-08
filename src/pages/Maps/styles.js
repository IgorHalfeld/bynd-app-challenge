import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import colors from '~/utils/colors';

export const Card = styled.View`
  width: 95%;
  background-color: white;
  box-shadow: 0px 0px 30px #ccc;
  height: 180px;
  position: absolute;
  bottom: 10px;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardText = styled.Text`
  color: ${colors.gray[8]};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => (
    props.title
      ? `font-weight: 700; color: ${colors.gray[8]}; font-size: 20px;`
      : `font-weight: 300; color: ${colors.gray[4]}; font-size: 17px;`
  )}
`;

export const CardButton = styled.TouchableOpacity`
  color: ${colors.gray[8]};
  text-align: center;
  margin-top: 20px;
  display: flex;
  width: 95%;
  background-color: ${colors.indigo[8]}
  padding: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const CardButtonText = styled.Text`
  color: ${colors.gray[8]};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  color: ${colors.gray[1]};
  font-size: 18px;
`;

export const LocationBox = styled.View`
  background: ${colors.base};
  shadow-color: #000;
  shadow-offset: 0 0;
  shadow-opacity: 0.1;
  elevation: 1;
  border-radius: 4px;
  flex-direction: row;
  margin-top: 10px;
  margin-left: 10px;
`;

export const LocationText = styled.Text`
  margin: 8px 10px;
  font-size: 14px;
  color: #fff;
`;

export default StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
  mapStyle: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
});
