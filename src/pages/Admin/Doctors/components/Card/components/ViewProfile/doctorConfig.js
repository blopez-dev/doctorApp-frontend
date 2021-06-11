import React, { useEffect, useState } from 'react';
import { Drawer } from 'antd';
import { getUser } from 'common/services/users';
import dayjs from 'dayjs';
import { PhoneOutlined, MailOutlined, HomeOutlined } from '@ant-design/icons';
import { HeadingUser, BodyUser, Content, ImageUser, DetailDoctor, DescriptionDoctor } from './styles';

const DoctorProfile = ({ id, visible, onClose }) => {
  const [user, setUser] = useState(null);
  const dateStarting = (date) => dayjs(date).format('MMMM D, YYYY');
  useEffect(() => {
    if (visible) {
      getUser(id).then(setUser);
    }
  }, [visible]);
  return (
    <>
      <Drawer
        width={463}
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
        </div>
        )}
      </Drawer>
    </>
  );
};
export default DoctorProfile;
