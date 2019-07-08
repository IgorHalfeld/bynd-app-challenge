import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
} from 'react-navigation';

import HomeScreen from '~/pages/Home';
import QRCodePresenterScreen from '~/pages/QRCodePresenter';
import QRCodeScannerScreen from '~/pages/QRCodeScanner';
import MapsScreen from '~/pages/Maps';

const App = createStackNavigator({
  Home: HomeScreen,
  QRCodePresenter: QRCodePresenterScreen,
  QRCodeScanner: QRCodeScannerScreen,
  Maps: MapsScreen,
}, { headerMode: 'none' });

const Routes = createAppContainer(
  createSwitchNavigator({ App }),
);

export default Routes;
