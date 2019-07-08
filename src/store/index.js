import { createStore } from 'react-hooks-global-state';
import reducer from './reducer';

const initialState = {
  driver: Object.create(null),
  user: {
    coordinates: {
      latitude: null,
      longitude: null,
    },
  },
  distance: 0,
  hasErrors: Object.create(null),
};

export const { GlobalStateProvider, dispatch, useGlobalState } = createStore(reducer, initialState);
