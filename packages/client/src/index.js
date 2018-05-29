import React from 'react';
import { render } from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';

import './index.css';

import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';

import Services from './modules/services/containers/Services';

const store = configureStore();

render(
  <ReduxProvider store={store}>
    <Services />
  </ReduxProvider>,
  document.getElementById('root')
);

registerServiceWorker();
