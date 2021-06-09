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

export const Actions = styled.div`
  position:relative;
  display:flex;
  flex-flow:row wrap;
  justify-content: flex-end;
  width:100%;
  padding:10px;
  input{
    max-width:10%;
  }
`;

export const AddNew = styled.button`
  background-color: #49C496;
  color: #fff;
  padding: 8px 12px;
  border: 0;
  font-size: 14px;
  box-shadow: 2px 2px 6px #bbbbbb;
`;
