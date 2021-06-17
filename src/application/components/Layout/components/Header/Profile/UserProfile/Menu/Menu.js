import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { Menu } from 'antd';
import ButtonLogout from './styles';

const MenuOverlay = () => {
  const { logout } = useAuth0();

  return (
    <Menu>
      <Menu.Item key="0" data-testid="DropdownMenu">
        <a href="www.google.com">Ajustes</a>
      </Menu.Item>
      <Menu.Item key="1">
        <ButtonLogout type="button" onClick={() => logout({ returnTo: window.location.origin })}>
          Log Out
        </ButtonLogout>
      </Menu.Item>
    </Menu>
  );
};

export default MenuOverlay;
