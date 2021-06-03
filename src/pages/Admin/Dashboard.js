import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Layout } from 'antd';
import { getAllUsers } from '../../common/services/users';
import { getAllPatients } from '../../common/services/patients';
import signIn from '../../common/services/auth';
import Head from '../../application/components/Header/Header';
import Sidebar from '../../application/components/Sidebar/Sidebar';

const Admin = () => {
  const { isAuthenticated, getIdTokenClaims } = useAuth0();

  useEffect(() => {
    getAllUsers();
    getAllPatients();
    getIdTokenClaims().then(({ __raw: idToken }) => signIn(idToken));
  }, []);

  return (
    isAuthenticated && (
    <>
      <Layout>
        <Head />
        <Sidebar />
      </Layout>,
    </>
    )
  );
};

export default Admin;
