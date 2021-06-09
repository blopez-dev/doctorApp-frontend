import React, { useEffect, useState } from 'react';
import { Drawer } from 'antd';
import { getUser } from 'common/services/users';

const DoctorProfile = ({ id, visible, onClose, title }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (visible) {
      getUser(id).then(setUser);
    }
  }, [visible]);

  return (
    <>
      <Drawer
        width={760}
        visible={visible}
        onClose={onClose}
        placement="right"
        title={title}
      >
        {user && (
          <p> {user.name}</p>
        )}
      </Drawer>
    </>
  );
};
export default DoctorProfile;
