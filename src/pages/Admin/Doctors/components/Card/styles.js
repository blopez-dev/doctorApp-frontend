import styled from 'styled-components';
import { Avatar as AntdAvatar } from 'antd';

export const CardWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 30px 15px 0 15px;
  box-shadow: 3px 3px 16px #dbdbdb;
  width:18.5%;
  min-height:335px;
  margin:10px 10px 0 10px;
  font-family: 'Roboto-Regular', sans-serif;
  @media (max-width: 1600px) {
    width:18%;
  }
`;

export const InfoDoctor = styled.div`
  position:relative;
  display:flex;
  flex-flow:column wrap;
  justify-content: center;
  align-items:center;
  width:100%;
  > *{
    display:flex;
    flex-flow:row wrap;

  }
`;

export const SendMessage = styled.div`
  width:55%;
  justify-content: space-between;
  align-items:center;
`;
export const ViewDoctor = styled.div`
  justify-content: flex-end;
  align-items:center;
`;
export const CustomIcon = styled.img`
  display:inline-block;
  max-width:18px;
`;
export const ActionsDoctor = styled.div`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding:15px 0 15px;;
  border-top: 1px solid rgb(219, 237, 233);

  :after {
    position: absolute;
    left: 55%;
    top: 0;
    display: block;
    margin: 0 auto;
    content: "";
    width: 1px;
    height: 100%;
    background-color: rgb(219, 237, 233);
  }

  button {
    position: relative;
    text-align: center;
    font-size: 13px;
    border: 0;
    color: #25233c;
    padding: 5px
  }

`;
export const NameDoctor = styled.h2`
  font-family: 'Roboto-Medium', sans-serif;
  font-size:18px;
  letter-spacing: 0.5px;
  color:#646D82;
`;
export const SpecialityDoctor = styled.p`
  font-size:14px;
  letter-spacing: 0.5px;
  color:#646D82;
`;

export const Avatar = styled(AntdAvatar)`
  width: 100%;
  display: flex;
  height: 100%;
  font-size: 30px;
  align-items: center;
  text-transform: capitalize;
  background: #25233c;
`;

export const ImageDoctor = styled.div`
  position:relative;
  display: block;
  width:90px;
  height:90px;
  border-radius: 50%;
  overflow: hidden;
  
  img{
    position: absolute;
    top: calc(50% - 55px);
    left: calc(50% - 70px);
    max-width: 150px;
    display: block;
  }
  @media (max-width: 1600px) {
    width:70px;
    height:70px;
  }
`;
export const Button = styled.button`
  position:relative;
  display: inline-block;
  font-size:12px;
  cursor: pointer;
  background:none;
`;
