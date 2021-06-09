import styled from 'styled-components';

const FormEmail = styled.div`
  display:flex;
  flex-flow:column wrap;
  justify-content: flex-start;
  align-items: stretch;
  padding:15px;
  textarea{
    resize: none;
  }
  button{
    display:block;
    margin-left:auto;
    background-color:#49C496;
    border:0;
    color:#fff;
  }
`;

export default FormEmail;
