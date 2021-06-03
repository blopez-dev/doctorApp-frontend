import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Dashboard from '../../pages/User/Dashboard/Dashboard';
import Doctors from '../../pages/User/Doctors/Doctors';
import Patients from '../../pages/User/Patients/Patients';
import Schedule from '../../pages/User/Schedule/Schedule';

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
        <Route path="/agenda">
          <Schedule />
        </Route>
      </Switch>
    </Layout>
  </Router>
);

export default Routing;
