import styled from 'styled-components';

export const HeadingUser = styled.div`
  position:relative;
  display:flex;
  flex-flow:row wrap;
  justify-content: center;
  align-items: stretch;
  background-color:#fff;
  box-shadow: 2px 2px 14px rgba(205, 205, 205, 0.51);
`;
export const DetailDoctor = styled.div`
  position:relative;
  display:flex;
  flex-flow:column wrap;
  justify-content: center;
  align-items: flex-start;
  margin:20px auto;
  > * {
    margin:5px 0px;
    .anticon{
      margin:4px 8px;
      path{
        fill:#36beb4;
      }
    }
  }
`;
export const BodyUser = styled.div`
  position:relative;
  display:flex;
  flex-flow:row wrap;
  justify-content: center;
  align-items: stretch;
  margin:20px auto;
  background-color:#fff;
  box-shadow: 2px 2px 14px rgba(205, 205, 205, 0.51);
  font-family: 'Roboto-Regular', sans-serif;
`;

export const Content = styled.div`
  display: flex;
  flex-flow:column wrap;
  justify-content: center;
  align-items: center;
  width: 90%;
  text-align: left;
  padding: 10px;
  min-height:300px;

  .profile--heading.image {
    font-size: 18px;
    font-family: 'Roboto-Medium', sans-serif;
  }
`;
export const ImageUser = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
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

export const DescriptionDoctor = styled.div`
  max-width:80%;
  text-align:left;
  margin:0 auto;
  padding:15px;
  .description--title{
    font-family: 'Roboto-Bold', sans-serif;
    font-size:16px;
  }
  .description--content{
  }
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

export const Button = styled.button`
  position:relative;
  display: inline-block;
  font-size:12px;
  cursor: pointer;
  background:none;
`;
