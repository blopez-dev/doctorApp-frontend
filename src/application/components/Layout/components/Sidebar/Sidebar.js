import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import Wrapper from './styles';

const Sidebar = () => (
  <Wrapper>
    <Menu theme="dark" mode="inline" activeKey="/">
      <Menu.Item key="/">
        <NavLink to="/">
          Inicio
        </NavLink>
      </Menu.Item>
      <Menu.Item key="/doctores">
        <NavLink to="/doctores">
          Doctores
        </NavLink>
      </Menu.Item>
      <Menu.Item key="/pacientes">
        <NavLink to="/pacientes">
          Pacientes
        </NavLink>
      </Menu.Item>
      <Menu.Item key="/agenda">
        <NavLink to="/agenda">
          Agenda
        </NavLink>
      </Menu.Item>
    </Menu>
  </Wrapper>
);

export default Sidebar;
