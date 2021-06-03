import React, { useState, useEffect } from 'react';
import { getAllPatients } from '../../../common/services/patients';

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getAllPatients()
      .then(setPatients)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2>Patients</h2>
      {loading && <div>Loading</div>}
      {patients.map((patient) => (
        <div>{patient.name}</div>
      ))}
    </div>
  );
};

export default Patients;
