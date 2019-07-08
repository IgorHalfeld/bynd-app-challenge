import React from 'react';
import {
  View,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import ImageOverlay from 'react-native-image-overlay';
import styles from './styles';
import colors from '~/utils/colors';

const Home = props => (
  <View style={styles.container}>
    <TouchableOpacity
      onPress={() => props.navigation.navigate('QRCodePresenter')}
    >
      <ImageOverlay
        height={Dimensions.get('window').height / 2}
        overlayColor={colors.base}
        source={require('../../assets/driver.jpg')}
      >
        <View>
          <Text style={styles.title}>Motorista</Text>
          <Text style={styles.text}>Compartilhe trajetos.</Text>
        </View>
      </ImageOverlay>
    </TouchableOpacity>

    <TouchableOpacity
      onPress={() => props.navigation.navigate('QRCodeScanner')}
    >
      <ImageOverlay
        height={Dimensions.get('window').height / 2}
        overlayColor={colors.indigo[3]}
        source={require('../../assets/rider.jpeg')}
      >
        <View>
          <Text style={styles.title}>Caroneiro</Text>
          <Text style={styles.text}>Compartilhe viagens.</Text>
        </View>
      </ImageOverlay>
    </TouchableOpacity>
  </View>
);

export default Home;
