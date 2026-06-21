import React, { useState } from 'react';
import { truncateString } from 'common/utils/string';
import DoctorProfile from './components/ViewProfile/DoctorProfile';
import DoctorEmail from './components/SendMessage/doctorEmail';
import Viewicon from './assets/Viewicon.png';
import sendMessage from './assets/sendMessage.png';
import { CardWrapper, ImageDoctor, InfoDoctor, NameDoctor, SpecialityDoctor, ActionsDoctor, CustomIcon, SendMessage, ViewDoctor, Button, Avatar } from './styles';

const Card = ({ id, avatar, name, description, onUpdate }) => {

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
      <CardWrapper data-testid="CardDoctor">
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
            {truncateString(description, 40)}
          </SpecialityDoctor>
        </InfoDoctor>
        <ActionsDoctor>
          <SendMessage>
            <CustomIcon src={sendMessage} alt="send message" />
            <Button onClick={showMessage} data-testid="NewMessage">Enviar Mensaje</Button>
          </SendMessage>
          <ViewDoctor>
            <CustomIcon src={Viewicon} alt="view profile" />
            <Button onClick={showProfile} className="view-profile" data-testid="ViewDoctor">Ver doctor</Button>
          </ViewDoctor>
        </ActionsDoctor>
      </CardWrapper>
      <DoctorProfile
        id={id}
        onClose={closeProfile}
        onUpdate={onUpdate}
        title={name}
        visible={visibleProfile}
      />
      <DoctorEmail visible={visibleMessage} onClose={hideMessage} title={name} />
    </>
  );
};

export default Card;
