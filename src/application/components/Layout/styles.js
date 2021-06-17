import styled from 'styled-components';

export const GlobalWrapper = styled.main`
.ant-layout-sider-collapsed{
  .ant-menu-title-content span{display:none;}
}
`;
export const Content = styled.div`
  height: 85vh;
  overflow-y: scroll;
`;
export const Wrapper = styled.div`
  max-width: 1600px;
  padding: 20px 15px;
  margin: 0 auto;
`;
export const Toggle = styled.button`
  background:transparent;
  border:0;
  margin: 5px 10px;
  padding:5px;
`;
