import styled from 'styled-components';

export const WrapperContent = styled.div`
  max-width: 1440px;
  padding: 20px 15px;
  margin: 0 auto;
  .ant-pagination{
    margin:10px 10px 10px auto;
    .ant-pagination-item-active{
      border:0;
      background-color:#49C496;
      a{
        color:#fff;
      }
    }
  }
`;

export const Content = styled.div`
  display:flex;
  flex-flow:row wrap;
  justify-content: space-between;
  align-items: flex-start;
`;

export const TitleSection = styled.div`
  display:flex;
  flex-flow:row wrap;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ImageDoctor = styled.div`
  position:relative;
  display:block;
  margin:0 auto;
  width:100px;
  height:100px;
  border-radius: 50%;
  overflow: hidden;
`;
