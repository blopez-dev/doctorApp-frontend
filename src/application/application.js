import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Dashboard from '../pages/Admin/Dashboard';
import GlobalApp from './styles/globalStyles';

function Application() {
  return (
    <GlobalApp>
      <Dashboard />
    </GlobalApp>
  );
}

export default withAuthenticationRequired(Application);
