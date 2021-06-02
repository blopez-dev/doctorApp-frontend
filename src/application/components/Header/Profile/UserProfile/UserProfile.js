import React from 'react';
import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useAuth0 } from '@auth0/auth0-react';
import MenuOverlay from './Menu/Menu';

import UserData from './styles';

const UserProfile = () => {
  const userMenu = (<MenuOverlay />);
  const { user } = useAuth0();
  return (
    <UserData>
      <Dropdown overlay={userMenu} trigger={['click']}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          <span> {user.nickname} <DownOutlined /></span>
        </a>
      </Dropdown>
    </UserData>
  );
};

export default UserProfile;
