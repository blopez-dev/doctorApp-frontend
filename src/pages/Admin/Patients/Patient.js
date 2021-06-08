import React, { useState, useEffect } from 'react';
import Table from 'antd/lib/table';
import { Pagination } from 'antd';
import { getAllPatients } from '../../../common/services/patients';
import columns from './config/columns';

const pageLimit = 20;
const props = {
  bordered: true,
  loading: false,
  showHeader: true,
  rowSelection: {}
};

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
      <Table {...props} columns={columns} dataSource={patients} />
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
