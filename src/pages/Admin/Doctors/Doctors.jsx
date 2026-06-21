import React, { useState, useEffect } from 'react';
import { Table, Button, Space, message, Modal, Form, Input, Popconfirm } from 'antd';
import { getAllUsers, createUser, deleteUser } from 'common/services/users';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const fetchDoctors = async () => {
    setLoading(true);
    try {
      const data = await getAllUsers();
      setDoctors(data);
    } catch (error) {
      message.error('Error al cargar doctores');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const handleCreate = async (values) => {
    try {
      await createUser(values);
      message.success('Doctor creado exitosamente');
      setIsModalOpen(false);
      form.resetFields();
      fetchDoctors();
    } catch (error) {
      message.error('Error al crear doctor');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      message.success('Doctor eliminado');
      fetchDoctors();
    } catch (error) {
      message.error('Error al eliminar');
    }
  };

  const columns = [
    { title: 'Nombre', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Especialidad', dataIndex: 'specialty', key: 'specialty' },
    { title: 'Teléfono', dataIndex: 'phone', key: 'phone' },
    {
      title: 'Acciones',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Popconfirm
            title="¿Eliminar doctor?"
            onConfirm={() => handleDelete(record.id)}
          >
            <Button type="link" danger>Eliminar</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Doctores</h2>
        <Button type="primary" onClick={() => setIsModalOpen(true)}>
          Nuevo Doctor
        </Button>
      </div>

      <Table
        dataSource={doctors}
        columns={columns}
        rowKey="id"
        loading={loading}
        pagination={false}
      />

      <Modal
        title="Nuevo Doctor"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={handleCreate}>
          <Form.Item name="name" label="Nombre" rules={[{ required: true, message: 'El nombre es requerido' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email', message: 'Email inválido' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="specialty" label="Especialidad" rules={[{ required: true, message: 'La especialidad es requerida' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="phone" label="Teléfono">
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit" block>
            Guardar
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default Doctors;