import React from 'react';
import { Drawer } from 'antd';

const DoctorProfile = ({ visible, onClose, title }) => (
  <>
    <Drawer
      width={760}
      visible={visible}
      onClose={onClose}
      placement="right"
      title={title}
    />
  </>
);
export default DoctorProfile;
