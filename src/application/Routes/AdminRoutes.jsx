import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Dashboard from '../../pages/Admin/Dashboard/Dashboard';
import Doctors from '../../pages/Admin/Doctors/Doctors';
import Patients from '../../pages/Admin/Patients/Patient';
import Schedule from '../../pages/Admin/Shedule/Shedule';
import Appointments from '../../pages/Admin/Appointments/Appointments';

const Routing = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/doctores" element={<Doctors />} />
      <Route path="/pacientes" element={<Patients />} />
      <Route path="/salas" element={<Schedule />} />
      <Route path="/citas" element={<Appointments />} />
    </Routes>
  </Layout>
);

export default Routing;