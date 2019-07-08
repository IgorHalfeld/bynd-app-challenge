import { validateScannerOutput } from '~/utils/validates';
import { getDistanceFromLatLon } from '~/utils/converters';

export default (state, action) => {
  switch (action.type) {
    case 'treatDriverDataAndCoordinates':
      if (!validateScannerOutput(action.payload)(['id', 'name', 'coordinates'])) {
        return {
          ...state,
          hasErrors: { type: 'QRCODE_SCAN', error: 'Not valid data on QRCode' },
        };
      }
      return { ...state, driver: action.payload };
    case 'setCurrentUserLocation':
      return { ...state, user: action.payload };
    case 'setDistanceBetweenCoordinates':
      return {
        ...state,
        distance: getDistanceFromLatLon(
          action.payload.lat1,
          action.payload.lng1,
          action.payload.lat2,
          action.payload.lng2,
        ),
      };
    default:
      return state;
  }
};
