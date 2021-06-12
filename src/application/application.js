import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import GlobalStyles from './styles/globalStyles';
import GlobalFonts from '../assets/fonts/font';
import AdminRoutes from './Routes/AdminRoutes';

function Application() {
  return (
    <>
      <GlobalStyles />
      <GlobalFonts />
      <AdminRoutes />
    </>
  );
}

export default withAuthenticationRequired(Application);
