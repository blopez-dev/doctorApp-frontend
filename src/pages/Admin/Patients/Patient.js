import React, { useState, useEffect } from 'react';
import { Pagination } from 'antd';
import { getAllPatients } from '../../../common/services/patients';

const pageLimit = 15;

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getAllPatients(page, pageLimit)
      .then(setPatients)
      .finally(() => setLoading(false));
  }, [page]);

  const onPageChange = (page) => setPage(page);

  return (
    <div>
      <h2>Patients</h2>
      {loading && <div>Loading</div>}
      {patients.map((patient) => (
        <div>{patient.name}</div>
      ))}
      <Pagination
        current={page}
        pageSize={pageLimit}
        total={patients?.count}
        onChange={onPageChange}
        showSizeChanger={false}
      />
    </div>
  );
};

export default Patients;
