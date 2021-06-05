import React, { useState, useEffect } from 'react';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { getAllUsers } from '../../../common/services/users';

const { Meta } = Card;

const Doctors = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getAllUsers()
      .then(setUsers)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2>Doctors</h2>
      {loading && <div>Loading</div>}
      {users.map((user) => (
        <Card
          style={{ width: 300 }}
          cover={(
            <img
              alt="example"
              src={user.avatar}
            />
          )}
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />
          ]}
        >
          <Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={user.name}
            description={user.description}
          />
        </Card>
      ))}
    </div>
  );
};

export default Doctors;
