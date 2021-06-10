import styled from 'styled-components';

export const BodyUser = styled.div`
  position:relative;
  display:flex;
  flex-flow:row wrap;
  justify-content: space-between;
  align-items: stretch;
`;

export const LeftCol = styled.div`
  display: flex;
  flex-flow:column wrap;
  justify-content: center;
  align-items: center;
  width: 25%;
  text-align: left;
  padding: 10px;  
  background-color: #e2e2e2;
  box-shadow: 2px 2px 14px rgba(205, 205, 205, 0.51);

  .profile--heading.image {
    font-size: 18px;
    font-family: 'Roboto-Medium', sans-serif;
  }
`;
export const ImageUser = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  margin:15px auto;
  border-radius: 50%;
  overflow: hidden;
  .profile--heading{
    position: absolute;
    top: calc(50% - 55px);
    left: calc(50% - 70px);
    display: block;
    max-width: 200%;
  }
`;

export const RightCol = styled.div`
  position: relative;
  background-color: rgba(238, 238, 238, 0.46);
  box-shadow: 2px 2px 14px rgba(205, 205, 205, 0.51);
  width:70%;
`;

export const BasicInformation = styled.div`
  font-size:12px;
`;

export const DataDoctor = styled.div`
  max-width:80%;
  text-align:left;
  margin-left: auto;
`;
