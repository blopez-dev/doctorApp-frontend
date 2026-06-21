import React, { useState, useEffect } from 'react';
import { Table, Button, Space, message, Modal, Form, Input, Popconfirm } from 'antd';
import { getAllPatients, createPatient, deletePatient } from 'common/services/patients';

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const fetchPatients = async () => {
    setLoading(true);
    try {
      const data = await getAllPatients();
      setPatients(data);
    } catch (error) {
      message.error('Error al cargar pacientes');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const handleCreate = async (values) => {
    try {
      await createPatient(values);
      message.success('Paciente creado exitosamente');
      setIsModalOpen(false);
      form.resetFields();
      fetchPatients();
    } catch (error) {
      message.error('Error al crear paciente');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deletePatient(id);
      message.success('Paciente eliminado');
      fetchPatients();
    } catch (error) {
      message.error('Error al eliminar');
    }
  };

  const columns = [
    { title: 'Nombre', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Teléfono', dataIndex: 'phone', key: 'phone' },
    { title: 'Dirección', dataIndex: 'address', key: 'address' },
    {
      title: 'Acciones',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Popconfirm
            title="¿Eliminar paciente?"
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
        <h2>Pacientes</h2>
        <Button type="primary" onClick={() => setIsModalOpen(true)}>
          Nuevo Paciente
        </Button>
      </div>

      <Table
        dataSource={patients}
        columns={columns}
        rowKey="id"
        loading={loading}
        pagination={false}
      />

      <Modal
        title="Nuevo Paciente"
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
          <Form.Item name="phone" label="Teléfono" rules={[{ required: true, message: 'El teléfono es requerido' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="address" label="Dirección">
            <Input />
          </Form.Item>
          <Form.Item name="pathologies" label="Patologías">
            <Input.TextArea />
          </Form.Item>
          <Button type="primary" htmlType="submit" block>
            Guardar
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default Patients;