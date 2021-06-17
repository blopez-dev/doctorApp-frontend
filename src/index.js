import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import configureStore from './application/store/index';
import Application from './application/application';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <Provider store={configureStore()}>
        <Application data-testid="Application" />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
