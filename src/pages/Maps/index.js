import React from 'react';
import { View, PermissionsAndroid } from 'react-native'; // eslint-disable-line
import MapView, { Marker } from 'react-native-maps';
import styles, {
  LocationBox,
  LocationText,
  Card,
  CardText,
  CardButton,
} from './styles';
import { useGlobalState, dispatch } from '~/store';

const Maps = () => {
  const [driver] = useGlobalState('driver');
  const [distance] = useGlobalState('distance');
  const driverFistName = driver.name.split(' ')[0];

  function calculateDistance(coordinates) {
    dispatch({
      type: 'setDistanceBetweenCoordinates',
      payload: {
        lat1: driver.coordinates.latitude,
        lng1: driver.coordinates.longitude,
        lat2: coordinates.latitude,
        lng2: coordinates.longitude,
      },
    });
  }

  function getUserLocation() {
    return new Promise((resolve) => {
      const handlerNavigationEvent = (event) => {
        const { coords: coordinates } = event;
        dispatch({
          type: 'setCurrentUserLocation',
          payload: { coordinates, latitudeDelta: 0.0143, longitudeDelta: 0.0134 },
        });
        resolve(coordinates);
      };
      navigator.geolocation.getCurrentPosition(handlerNavigationEvent); // eslint-disable-line
    });
  }

  async function getPermissions() {
    try {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      calculateDistance(
        await getUserLocation(),
      );
    } catch (_) {} // eslint-disable-line
  }

  return (
    <View style={styles.container}>
      <MapView
        onMapReady={getPermissions}
        style={styles.mapStyle}
        loadingEnabled
        showsUserLocation
        initialRegion={{
          latitude: -23.5521186,
          latitudeDelta: 0.0143,
          longitude: -46.6502131,
          longitudeDelta: 0.0134,
        }}
      >
        {driver.coordinates
          && (
          <Marker
            coordinate={driver.coordinates}
            anchor={{ x: 0, y: 0 }}
            image={require('../../assets/marker.png')}
          >
            <LocationBox>
              <LocationText>{driver.name}</LocationText>
            </LocationBox>
          </Marker>
          )
        }
      </MapView>
      <Card>
        <CardText title>Há {distance.toFixed(0)}m do {driverFistName}.</CardText>
        <CardText>Basta confirmar a carona agora!</CardText>
        <CardButton onPress={() => alert('Confirmado!')}>
          <CardText>CONFIRMAR</CardText>
        </CardButton>
      </Card>
    </View>
  );
};

export default Maps;
