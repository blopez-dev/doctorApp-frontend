import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import CreateTitle from '../../../application/components/Title/Title';
import ContainerDashboard from './style';

const Dashboard = () => {
  const { user } = useAuth0();

  return (
    <ContainerDashboard data-testid="Dashboard">
      <CreateTitle Type={1} Content={`Bienvenido a tu Hospital ${user.nickname}`} />
    </ContainerDashboard>
  );
};

export default Dashboard;
