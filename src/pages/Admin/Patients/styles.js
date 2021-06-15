import styled from 'styled-components';

export const Wrapper = styled.div`
  display:flex;
  flex-flow:row wrap;
  justify-content: space-between;
  align-items: center;
  width:100%;
    .ant-table{
      border-radius: 10px;
      margin:20px;
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
export const CustomRow = styled.div`
  display:flex;
  flex-flow:row wrap;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  width:100%;
  title{
    display:block;
    max-width:50%;
  }
  .row__button--add{
    display:block;
    max-width:40%;
  }
`;
export const TablePatients = styled.div`
  width:100%;
`;
export const EditPatient = styled.button`
  background-color: #36beb4;
  border: 0;
  color: #fff;
  padding: 6px 12px;
  margin: 5px;
  cursor:pointer;
`;
export const DeletePatient = styled.button`
  background-color: #114e9c;
  border: 0;
  color: #fff;
  padding: 6px 12px;
  margin: 5px;
  cursor: pointer;
`;

export const AddNew = styled.button`
  background-color: #36beb4;
  color: #fff;
  padding: 6px 12px;
  border: 0;
  font-size: 14px;
  box-shadow: 2px 2px 6px #bbbbbb;
  cursor: pointer;
`;
