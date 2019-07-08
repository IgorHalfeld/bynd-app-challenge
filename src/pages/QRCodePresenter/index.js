import React from 'react';
import { View, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import styles from './styles';
import colors from '~/utils/colors';
import { driver } from '~/mock';

const QRCodePresenter = () => (
  <View style={styles.container}>
    <QRCode
      value={JSON.stringify(driver())}
      size={200}
      color={colors.base}
      bgColor="purple"
      fgColor="white"
    />
    <Text style={styles.text}>Deixe o QRCode ser escaneado.</Text>
    <Text style={styles.textDesc}>Vamos pegar a localização do motorista para você.</Text>
  </View>
);

export default QRCodePresenter;
