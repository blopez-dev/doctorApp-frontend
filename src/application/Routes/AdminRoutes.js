import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Dashboard from '../../pages/Admin/Dashboard/Dashboard';
import Doctors from '../../pages/Admin/Doctors/Doctor';
import Patients from '../../pages/Admin/Patients/Patient';

const Routing = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/doctores">
          <Doctors />
        </Route>
        <Route path="/pacientes">
          <Patients />
        </Route>
        <Route path="/agenda" />
      </Switch>
    </Layout>
  </Router>
);

export default Routing;
