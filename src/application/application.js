import React from 'react';
import { withAuthenticationRequired, useAuth0 } from '@auth0/auth0-react';
import GlobalApp from './styles/globalStyles';

function Application() {
  const { user } = useAuth0();
  return (
    <GlobalApp>
      <h2>DOCTOR APP {user.email}</h2>
    </GlobalApp>
  );
}

export default withAuthenticationRequired(Application);
