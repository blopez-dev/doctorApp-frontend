import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import configureStore from './application/store/index';
import Application from './application/application';
import 'antd/dist/antd.css';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="blopez-dev.eu.auth0.com"
      clientId="9YTvA7ALKzgC7C6xdsKj3rUdkliVhTp4"
      redirectUri={window.location.origin}
    >
      <Provider store={configureStore()}>

        <Application />
      </Provider>
    </Auth0Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);
