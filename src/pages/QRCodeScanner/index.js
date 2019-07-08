import React, { useState } from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { View, Text, ActivityIndicator } from 'react-native';
import styles from './styles';
import colors from '~/utils/colors';
import { dispatch } from '../../store';

const Scanner = (props) => {
  const [canRender, setCanPossibility] = useState(false);

  setTimeout(() => {
    setCanPossibility(true);
  }, 300);

  function renderBottomMessage() {
    return (
      <View style={styles.bottomContentContainer}>
        <Text style={styles.text}>
          Scannei o QRCode do motorista.
        </Text>
        <Text style={styles.textDesc}>
          Para pegar a carona, precisamos que você scannei o QRCode do motorista.
        </Text>
      </View>
    );
  }
  function onSuccess({ data }) {
    dispatch({ type: 'treatDriverDataAndCoordinates', payload: JSON.parse(data) });
    props.navigation.navigate('Maps');
  }

  return (
    <View style={styles.container}>
      {
        !canRender
          ? <ActivityIndicator size="large" color={colors.base} />
          : (
            <QRCodeScanner
              cameraStyle={styles.cameraStyle}
              onRead={onSuccess}
              showMarker
              topViewStyle={styles.topContentContainer}
              bottomContent={renderBottomMessage()}
              checkAndroid6Permissions
            />
          )
      }
    </View>
  );
};

export default Scanner;
