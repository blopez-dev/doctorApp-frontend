import React, { useState } from 'react';
import { Layout as AntdLayout } from 'antd';
import { MenuFoldOutlined } from '@ant-design/icons';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { GlobalWrapper, Wrapper, Content, Toggle } from './styles';

const { Sider } = AntdLayout;

const Layout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <GlobalWrapper>
      <Header />
      <AntdLayout>
        <Sider className="site-layout-background" collapsed={collapsed}>
          <Sidebar />
        </Sider>
        <AntdLayout>
          <Content>
            <Toggle type="button" onClick={onCollapsed}>
              <MenuFoldOutlined style={{ fontSize: 20, color: 'black' }} />
            </Toggle>
            <Wrapper className="wrapper--content">
              {children}
            </Wrapper>
          </Content>
        </AntdLayout>
      </AntdLayout>
    </GlobalWrapper>
  );
};

export default Layout;
