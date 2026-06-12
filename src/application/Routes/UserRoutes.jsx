import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

const Routing = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<div>User Dashboard - TODO</div>} />
        <Route path="/doctores" element={<div>User Doctors - TODO</div>} />
        <Route path="/pacientes" element={<div>User Patients - TODO</div>} />
        <Route path="/agenda" element={<div>User Schedule - TODO</div>} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default Routing;