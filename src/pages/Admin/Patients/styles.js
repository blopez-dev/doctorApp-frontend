import styled from 'styled-components';

const Wrapper = styled.div`
  display:flex;
  flex-flow:row wrap;
  justify-content: flex-end;
  align-items: center;
  .data--table.patients{
    width:100%;
    .ant-table{
      border-radius: 10px;
      margin:20px;
    }
  }
  .ant-pagination{
    margin:20px;
    .ant-pagination-item-active{
      background-color:#36beb4;
      border:0;
      a{
        color:#fff;
      }
    }
    && :hover{
      border-color:#36beb4;
    }
  }
`;

export default Wrapper;
