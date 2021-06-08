import React, { useEffect, useState } from 'react';
import { getUser } from '../../services/users';
import DoctorProfile from '../ViewProfile/doctorConfig';
import DoctorEmail from '../SendMessage/doctorEmail';
import Viewicon from '../../../assets/images/Viewicon.png';
import sendMessage from '../../../assets/images/sendMessage.png';
import { CardWrapper, ImageDoctor, InfoDoctor, NameDoctor, SpecialityDoctor, ActionsDoctor, CustomIcon, SendMessage, ViewDoctor, Button } from './styles';

const Card = ({ id, avatar, name, speciality }) => {
  const [user, setUser] = useState([]);
  const [visibleProfile, setVisibleProfile] = useState(false);
  const [visibleMessage, setVisibleMessage] = useState(false);

  useEffect(() => {
    getUser(id)
      .then(setUser);
  }, [user]);

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
          <img src={avatar} alt={name} />
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
      <DoctorEmail id={id} visible={visibleMessage} onClose={hideMessage} title={name} />
    </>

  );
};

export default Card;
