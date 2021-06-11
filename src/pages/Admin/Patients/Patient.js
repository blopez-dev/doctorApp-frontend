import React, { useState, useEffect } from 'react';
import { Pagination, Table } from 'antd';
import { getAllPatients } from 'common/services/patients';
import CreateTitle from '../../../application/components/Title/Title';
import columns from './config/columns';
import Wrapper from './styles';

const pageLimit = 10;

const Patients = () => {
  const [patients, setPatients] = useState(null);
  const [page, setPage] = useState(1);
  useEffect(() => {
    getAllPatients(page, pageLimit)
      .then(setPatients);
  }, [page]);
  const onPageChange = (page) => setPage(page);
  return (
    <Wrapper>
      <CreateTitle Type={1} Content="Pacientes" />
      <CreateTitle Type={1} Content="Pacientes" />
      <Table
        columns={columns}
        dataSource={patients?.rows.map((patient) => ({ ...patient, key: patient.id }))}
        pagination={false}
        className="data--table patients"
      />
      <Pagination
        current={page}
        pageSize={pageLimit}
        total={patients?.count}
        onChange={onPageChange}
        showSizeChanger={false}
      />
    </Wrapper>
  );
};

export default Patients;
