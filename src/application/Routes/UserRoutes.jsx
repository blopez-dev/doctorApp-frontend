import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import ProtectedRoute from '../../common/components/ProtectedRoute';

const Routing = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<div>User Dashboard - TODO</div>} />
      <Route
        path="/doctores"
        element={
          <ProtectedRoute>
            <div>User Doctors - TODO</div>
          </ProtectedRoute>
        }
      />
      <Route
        path="/pacientes"
        element={
          <ProtectedRoute>
            <div>User Patients - TODO</div>
          </ProtectedRoute>
        }
      />
      <Route
        path="/agenda"
        element={
          <ProtectedRoute>
            <div>User Schedule - TODO</div>
          </ProtectedRoute>
        }
      />
    </Routes>
  </Layout>
);

export default Routing;