import React from 'react';
import { Form, Drawer, Input, Button } from 'antd';
import { updateById } from 'common/services/users';

const UpdateDoctor = ({ user, visible, onClose, onUpdate }) => {
  const onFinish = async (values) => {
    await updateById(user.id, values);
    onUpdate();
  };
  return (
    <div>
      <Drawer
        width={480}
        visible={visible}
        onClose={onClose}
        placement="right"
        title="Actualizar Doctor"
        className="drawer-info"
      >
        <Form layout="vertical" initialValues={user} onFinish={onFinish}>
          <Form.Item label="Nombre" name="name" required>
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item label="Email" name="email" required>
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item label="Telefono" name="phone" required>
            <Input placeholder="Teléfono" />
          </Form.Item>
          <Form.Item label="Descripcion" name="description" required>
            <Input placeholder="Descripción" />
          </Form.Item>
          <Form.Item label="Especialidad" name="specialty" required>
            <Input placeholder="Especialidad" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Actualizar</Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};

export default UpdateDoctor;
