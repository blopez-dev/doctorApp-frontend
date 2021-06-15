import React, { useState } from 'react';
import { Drawer, Form, Input } from 'antd';
import { createPatient } from 'common/services/patients';
import SavePatient from './styles';

const NewPatient = ({ visible, onFinish, onClose }) => {
  const [loading, setLoading] = useState(false);

  const onCreate = async (values) => {
    try {
      setLoading(true);
      await createPatient(values);
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
        title="Nuevo paciente"
      >
        <Form layout="vertical" onFinish={onCreate}>
          <Form.Item label="Nombre" name="name" required rules={[{ required: true, message: 'El nombre es obligatorio' }]}>
            <Input placeholder="Nombre" />
          </Form.Item>
          <Form.Item label="Email" name="email" type="email" required rules={[{ required: true, message: 'El email es obligatorio y debe contener un formato email' }]}>
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item label="Telefono" name="phone" required rules={[{ required: true, message: 'El teléfono es obligatorio' }]}>
            <Input placeholder="Teléfono" />
          </Form.Item>
          <Form.Item label="Direccion" name="address" required rules={[{ required: true, message: 'La dirección de contacto es obligatoria' }]}>
            <Input placeholder="Dirección" />
          </Form.Item>
          <Form.Item label="Patologias" name="pathologies">
            <Input placeholder="Patologías" />
          </Form.Item>
          <Form.Item>
            <SavePatient loading={loading} htmlType="submit">Guardar</SavePatient>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};

export default NewPatient;
