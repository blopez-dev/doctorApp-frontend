import React, { useEffect, useState } from 'react';
import { Drawer } from 'antd';
import dateLib from 'common/adapters/date';
import { PhoneOutlined, MailOutlined, HomeOutlined } from '@ant-design/icons';
import { getUser, deleteUser } from 'common/services/users';
import UpdateDoctor from '../UpdateDoctor/UpdateDoctor';
import { HeadingUser, BodyUser, Content, ImageUser, DetailDoctor, DescriptionDoctor, ActionsDoctor, Button } from './styles';

const DoctorProfile = ({ id, visible, onClose, onUpdate }) => {
  const [user, setUser] = useState(null);
  const [visibleUpdateProfile, setVisibleUpdateProfile] = useState(false);
  const [userHasBeenUpdated, setUserHasBeenUpdated] = useState(false);

  const dateStarting = (date) => dateLib(date).format('MMMM D, YYYY');
  useEffect(() => {
    if (visible) {
      getUser(id).then(setUser);
    } else if (userHasBeenUpdated) {
      onUpdate();
    }
  }, [visible]);

  const showUpdateProfile = () => {
    setVisibleUpdateProfile(true);
  };
  const hideUpdateProfile = () => {
    setVisibleUpdateProfile(false);
  };
  const onDelete = async () => {
    await deleteUser(id);
    onUpdate();
  };

  const onUpdateDoctor = () => {
    setVisibleUpdateProfile(false);
    getUser(id).then(setUser);
    setUserHasBeenUpdated(true);
  };
  return (
    <>
      <Drawer
        width={480}
        visible={visible}
        onClose={onClose}
        placement="right"
        title="Perfil del doctor"
        className="drawer-info"
      >
        {user && (
        <div>
          <HeadingUser>
            <Content>
              <ImageUser>
                <img src={user.avatar} alt={user.name} className="profile--heading image" />
              </ImageUser>
              <h2 className="profile--heading title">{user.name}</h2>
              <span>{user.specialty}</span>
              <DetailDoctor>
                <div className="profile--data email">
                  <MailOutlined />
                  <span>{user.email}</span>
                </div>
                <div className="profile--data phone">
                  <PhoneOutlined />
                  <span>{user.phone}</span>
                </div>
                <div className="profile--data user-from">
                  <HomeOutlined />
                  <span>{dateStarting(user.createdAt)}</span>
                </div>
              </DetailDoctor>
            </Content>
          </HeadingUser>
          <BodyUser>
            <DescriptionDoctor>
              <h3 className="description--title">Sobre {user.name}</h3>
              <p className="description--content">{user.description}</p>
            </DescriptionDoctor>
          </BodyUser>
          <ActionsDoctor>
            <Button type="Button" onClick={onDelete}>Dar de baja</Button>
            <Button onClick={showUpdateProfile} className="view-profile">Actualizar Doctor</Button>
          </ActionsDoctor>
          <UpdateDoctor
            user={user}
            visible={visibleUpdateProfile}
            onClose={hideUpdateProfile}
            onUpdate={onUpdateDoctor}
          />
        </div>
        )}
      </Drawer>
    </>
  );
};
export default DoctorProfile;
