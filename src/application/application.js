import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import GlobalStyles from './styles/globalStyles';
// import UserRoutes from './Routes/UserRoutes';
import AdminRoutes from './Routes/AdminRoutes';

function Application() {
  return (
    <>
      <GlobalStyles />
      <AdminRoutes />
    </>
  );
}

export default withAuthenticationRequired(Application);
