import React, { useEffect, useState } from 'react';
import { Drawer } from 'antd';
import { getUser } from '../../services/users';

const DoctorProfile = ({ id, visible, onClose, title }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    getUser(id).then(setUser);
  }, [user]);

  return (
    <>
      <Drawer
        width={760}
        visible={visible}
        onClose={onClose}
        placement="right"
        title={title}
      >
        {user && user.rows.map((user) => (
          <p> {user.name}</p>

        ))}
      </Drawer>
    </>

  );
};
export default DoctorProfile;
