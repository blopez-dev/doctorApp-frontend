import React, { useState } from 'react';
import { Drawer, Form, Input, Button } from 'antd';
import { createUser } from 'common/services/users';

const NewDoctor = ({ visible, onFinish, onClose }) => {
  const [loading, setLoading] = useState(false);

  const onCreate = async (values) => {
    try {
      setLoading(true);
      await createUser(values);
    } finally {
      setLoading(false);
      onFinish();
    }
  };

  return (
    <>
      <Drawer
        width={480}
        visible={visible}
        placement="right"
        onClose={onClose}
        title="Nuevo doctor"
      >
        <Form layout="vertical" onFinish={onCreate}>
          <Form.Item label="Nombre" name="name" required>
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item label="Email" name="email" required>
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item label="Especialidad" name="specialty" required>
            <Input placeholder="Especialidad" />
          </Form.Item>
          <Form.Item>
            <Button loading={loading} type="primary" htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};

export default NewDoctor;
