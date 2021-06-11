import { css } from 'styled-components';
import 'antd/dist/antd.css';

const AntdGlobalStyle = css`
  .ant-layout{
    background: #eaedf7;
  }
  .ant-layout-sider,
  .ant-menu.ant-menu-dark, .ant-menu-dark .ant-menu-sub, .ant-menu.ant-menu-dark .ant-menu-sub{
    background:#25233c;
  }

  .ant-menu-item{
    padding-left: 24px;
    border-radius: 30px 0px 0px 30px;
  }


  .ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-selected{
    background-color:#eaedf7;
  }

  .ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-selected a {color:#25233c; font-weight: 500;}
  .ant-drawer-content{background-color:#eaedf7;}
`;

export default AntdGlobalStyle;
