import React from 'react';
import { Menu } from 'antd';

const MenuOverlay = () => (
  <Menu>
    <Menu.Item key="0">
      <a href="https://www.antgroup.com">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="https://www.aliyun.com">2nd menu item</a>
    </Menu.Item>
  </Menu>
);

export default MenuOverlay;
