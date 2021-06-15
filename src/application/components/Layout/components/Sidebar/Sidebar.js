import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import Wrapper from './styles';
import SidebarImages from './assets/images/images';

const Sidebar = () => (
  <Wrapper>
    <Menu theme="dark" mode="inline" activeKey="/">
      <Menu.Item key="/">
        <NavLink to="/">
          <img src={SidebarImages[0].image} alt="" className="iconSidebar" /> <span>Inicio</span>
        </NavLink>
      </Menu.Item>
      <Menu.Item key="/doctores">
        <NavLink to="/doctores">
          <img src={SidebarImages[1].image} alt="" className="iconSidebar" /> <span>Doctores</span>
        </NavLink>
      </Menu.Item>
      <Menu.Item key="/pacientes">
        <NavLink to="/pacientes">
          <img src={SidebarImages[2].image} alt="" className="iconSidebar" /><span>Pacientes</span>
        </NavLink>
      </Menu.Item>
      <Menu.Item key="/agenda">
        <NavLink to="/agenda">
          <img src={SidebarImages[3].image} alt="" className="iconSidebar" /> <span>Agenda</span>
        </NavLink>
      </Menu.Item>
    </Menu>
  </Wrapper>
);

export default Sidebar;
