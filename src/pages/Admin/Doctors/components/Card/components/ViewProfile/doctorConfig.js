import React, { useEffect, useState } from 'react';
import { Drawer } from 'antd';
import { getUser } from 'common/services/users';
import { BodyUser, LeftCol, RightCol, ImageUser, BasicInformation, DataDoctor } from './styles';

const DoctorProfile = ({ id, visible, onClose }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (visible) {
      getUser(id).then(setUser);
    }
  }, [visible]);

  return (
    <>
      <Drawer
        width={900}
        visible={visible}
        onClose={onClose}
        placement="right"
        title="Perfil del doctor"
        className="drawer-info"
      >
        {user && (
        <div>
          <BodyUser>
            <LeftCol>
              <h2 className="profile--heading title">{user.name}</h2>
              <ImageUser>
                <img src={user.avatar} alt={user.name} className="profile--heading image" />
              </ImageUser>
              <DataDoctor>
                <span>{user.email}</span>
              </DataDoctor>
            </LeftCol>
            <RightCol>
              <BasicInformation>
                <p>Basic information</p>
              </BasicInformation>
            </RightCol>
          </BodyUser>
        </div>
        )}
      </Drawer>
    </>
  );
};
export default DoctorProfile;
