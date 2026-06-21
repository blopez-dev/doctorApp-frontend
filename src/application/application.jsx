import React from 'react';
import GlobalStyles from './styles/globalStyles';
import GlobalFonts from '../assets/fonts/font';
import AdminRoutes from './Routes/AdminRoutes';

function Application() {
  return (
    <div>
      <GlobalStyles />
      <GlobalFonts />
      <AdminRoutes />
    </div>
  );
}

export default Application;