import React from 'react';
import { Typography } from 'antd';

const { Title, Text } = Typography;

const Dashboard = () => {
  return (
    <div style={{ padding: 24 }}>
      <Title level={2}>Bienvenido a Doctor App</Title>
      <Text>Gestiona doctores, pacientes, salas y citas desde el menú lateral.</Text>
      <div style={{ marginTop: 24 }}>
        <Title level={4}>Funcionalidades</Title>
        <ul>
          <li>Doctores: CRUD completo</li>
          <li>Pacientes: CRUD completo</li>
          <li>Salas: Consulta de salas disponibles</li>
          <li>Citas: Calendario con citas</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;