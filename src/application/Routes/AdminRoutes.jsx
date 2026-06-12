import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Dashboard from '../../pages/Admin/Dashboard/Dashboard';
import Doctors from '../../pages/Admin/Doctors/Doctors';
import Patients from '../../pages/Admin/Patients/Patient';
import Schedule from '../../pages/Admin/Shedule/Shedule';

const Routing = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/doctores" element={<Doctors />} />
        <Route path="/pacientes" element={<Patients />} />
        <Route path="/agenda" element={<Schedule />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default Routing;