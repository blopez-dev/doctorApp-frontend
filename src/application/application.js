import React, { useEffect } from 'react';
import { withAuthenticationRequired, useAuth0 } from '@auth0/auth0-react';
import GlobalApp from './styles/globalStyles';
import { createUser, getAllUsers } from '../common/services/users';

function Application() {
  const { user } = useAuth0();

  useEffect(() => {
    getAllUsers();
    createUser({ name: 'Juán', email: 'juan@email.com' });
  }, []);

  return (
    <GlobalApp>
      <h2>DOCTOR APP {user.email}</h2>
    </GlobalApp>
  );
}

export default withAuthenticationRequired(Application);
