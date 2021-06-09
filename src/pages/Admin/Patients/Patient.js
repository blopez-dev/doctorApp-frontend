import React, { useState, useEffect } from 'react';
import { Pagination, Table } from 'antd';
import { getAllPatients } from 'common/services/patients';
import columns from './config/columns';

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
    <div>
      <Table columns={columns} dataSource={patients?.rows} pagination={false} />
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
