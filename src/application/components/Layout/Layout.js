import React from 'react';
import { Layout as AntdLayout } from 'antd';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { Wrapper, Content } from './styles';

const { Sider } = AntdLayout;

const Layout = ({ children }) => (
  <div>
    <Header />
    <AntdLayout>
      <Sider className="site-layout-background">
        <Sidebar />
      </Sider>
      <AntdLayout>
        <Content>
          <Wrapper>
            {children}
          </Wrapper>
        </Content>
      </AntdLayout>
    </AntdLayout>
  </div>
);

export default Layout;
