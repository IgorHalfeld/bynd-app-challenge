import React from 'react';

import '~/config/ReactotronConfig';

import Routes from '~/routes';
import { GlobalStateProvider } from '~/store';

const App = () => (
  <GlobalStateProvider>
    <Routes />
  </GlobalStateProvider>
);

export default App;
