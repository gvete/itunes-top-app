/**
 * app.js
 *
 * This is the entry file for the application
 */

// Needed for redux-saga es6 generator support
import '@babel/polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import history from 'utils/history';
import 'sanitize.css/sanitize.css';

// Import root app
import App from 'containers/App';

import configureStore from './store/configureStore';
import { ThemeProvider } from './utils/ThemeContext';
import ErrorBoundary from './components/Error/ErrorBoundary';

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

// eslint-disable-next-line react/no-render-return-value
ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <ConnectedRouter history={history}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </ConnectedRouter>
    </ThemeProvider>
  </Provider>,
  MOUNT_NODE,
);
