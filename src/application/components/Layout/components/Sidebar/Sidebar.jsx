import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import Wrapper from './styles';
import SidebarImages from './assets/images/images';

const Sidebar = () => (
  <Wrapper data-testid="Sidebar">
    <Menu theme="dark" mode="inline" activeKey="/">
      <Menu.Item key="/">
        <NavLink to="/" >
          <span>Inicio</span>
        </NavLink>
      </Menu.Item>
      <Menu.Item key="/doctores">
        <NavLink to="/doctores">
          <span>Doctores</span>
        </NavLink>
      </Menu.Item>
      <Menu.Item key="/pacientes">
        <NavLink to="/pacientes">
          <span>Pacientes</span>
        </NavLink>
      </Menu.Item>
      <Menu.Item key="/salas">
        <NavLink to="/salas">
          <span>Salas</span>
        </NavLink>
      </Menu.Item>
      <Menu.Item key="/citas">
        <NavLink to="/citas">
          <span>Citas</span>
        </NavLink>
      </Menu.Item>
    </Menu>
  </Wrapper>
);

export default Sidebar;