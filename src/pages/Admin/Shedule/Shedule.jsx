import React, { useState, useEffect } from 'react';
import { Table, Tag, Button, message, Modal, Form, Input, Select, DatePicker } from 'antd';
import dayjs from 'dayjs';
import getAllRooms from '../../../common/services/rooms';

const { RangePicker } = DatePicker;

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const fetchRooms = async () => {
    setLoading(true);
    try {
      const data = await getAllRooms();
      setRooms(data);
    } catch (error) {
      message.error('Error al cargar salas');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  const columns = [
    { title: 'Nombre', dataIndex: 'name', key: 'name' },
    { title: 'Capacidad', dataIndex: 'capacity', key: 'capacity' },
    {
      title: 'Disponible',
      dataIndex: 'isAvailable',
      key: 'isAvailable',
      render: (isAvailable) => (
        <Tag color={isAvailable ? 'green' : 'red'}>
          {isAvailable ? 'Disponible' : 'Ocupado'}
        </Tag>
      ),
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <div style={{ marginBottom: 16 }}>
        <h2>Salas de Consulta</h2>
      </div>

      <Table
        dataSource={rooms}
        columns={columns}
        rowKey="id"
        loading={loading}
        pagination={false}
      />
    </div>
  );
};

export default Rooms;