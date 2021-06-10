import React, { useState } from 'react';
import DoctorProfile from './components/ViewProfile/doctorConfig';
import DoctorEmail from './components/SendMessage/doctorEmail';
import Viewicon from './assets/Viewicon.png';
import sendMessage from './assets/sendMessage.png';
import { CardWrapper, ImageDoctor, InfoDoctor, NameDoctor, SpecialityDoctor, ActionsDoctor, CustomIcon, SendMessage, ViewDoctor, Button, Avatar } from './styles';

const Card = ({ id, avatar, name, speciality }) => {
  const [visibleProfile, setVisibleProfile] = useState(false);
  const [visibleMessage, setVisibleMessage] = useState(false);

  const showProfile = () => {
    setVisibleProfile(true);
  };
  const closeProfile = () => {
    setVisibleProfile(false);
  };

  const showMessage = () => {
    setVisibleMessage(true);
  };
  const hideMessage = () => {
    setVisibleMessage(false);
  };

  return (
    <>
      <CardWrapper>
        <ImageDoctor>
          <Avatar>
            {avatar ? <img src={avatar} alt={name} /> : name[0]}
          </Avatar>
        </ImageDoctor>
        <InfoDoctor>
          <NameDoctor>
            {name}
          </NameDoctor>
          <SpecialityDoctor>
            {speciality}
          </SpecialityDoctor>
        </InfoDoctor>
        <ActionsDoctor>
          <SendMessage>
            <CustomIcon src={sendMessage} alt="send message" />
            <Button onClick={showMessage}>Enviar Mensaje</Button>
          </SendMessage>
          <ViewDoctor>
            <CustomIcon src={Viewicon} alt="view profile" />
            <Button onClick={showProfile} className="view-profile">Ver doctor</Button>
          </ViewDoctor>
        </ActionsDoctor>
      </CardWrapper>
      <DoctorProfile id={id} visible={visibleProfile} onClose={closeProfile} title={name} />
      <DoctorEmail visible={visibleMessage} onClose={hideMessage} title={name} />
    </>

  );
};

export default Card;
