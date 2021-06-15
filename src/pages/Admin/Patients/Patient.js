import React, { useState, useEffect } from 'react';
import { Pagination, Spin, Table } from 'antd';
import { deletePatient, getAllPatients } from 'common/services/patients';
import NewPatient from './components/NewPatient/NewPatient';
import CreateTitle from '../../../application/components/Title/Title';
import { Wrapper, TablePatients, DeletePatient, EditPatient, AddNew, CustomRow } from './styles';

import PatientProfile from './components/PatientProfile/PatientProfile';

const pageLimit = 15;

const Patients = () => {
  const [patients, setPatients] = useState(null);
  const [visiblePatient, setsVisiblePatient] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [createPatientVisible, setCreatePatientVisible] = useState(false);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const getPatients = () => {
    setLoading(true);
    getAllPatients(page, pageLimit)
      .then((setPatients))
      .finally(() => setLoading(false));
  };
  const showPatientProfile = (id) => {
    setsVisiblePatient(true);
    setSelectedPatient(id);
  };
  const closePatientProfile = () => {
    setsVisiblePatient(false);
  };

  const onDeletePatient = async (id) => {
    await deletePatient(id);
    setLoading(true);
    getPatients();
  };

  const onCreatePatient = () => {
    setCreatePatientVisible(true);
  };
  const hiddenCreation = () => {
    setCreatePatientVisible(false);
  };
  const onPatientsChange = () => {
    setCreatePatientVisible(false);
    getPatients();
  };

  useEffect(() => {
    getPatients();
  }, [page]);

  const onPageChange = (page) => setPage(page);
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id'
    },
    {
      title: 'Nombre',
      dataIndex: 'name'
    },
    {
      title: 'Email',
      dataIndex: 'email'
    },
    {
      title: 'Teléfono',
      dataIndex: 'phone'
    },
    {
      title: 'Dirección',
      dataIndex: 'address'
    },
    {
      title: 'Patologías',
      dataIndex: 'pathologies'
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (text, record) => (
        <div>
          <EditPatient onClick={() => showPatientProfile(record.id)}>
            Editar
          </EditPatient>
          <DeletePatient onClick={() => onDeletePatient(record.id)}>
            Borrar
          </DeletePatient>
        </div>
      )
    }

  ];
  return (
    <>
      <Wrapper>
        <CustomRow>
          <CreateTitle Type={1} Content="Pacients" className="row__title--heading" />
          {loading && <Spin />}
          <AddNew onClick={onCreatePatient} className="row__button--add">Nuevo Paciente</AddNew>
        </CustomRow>
        <TablePatients>
          <Table
            columns={columns}
            dataSource={patients?.rows.map((patient) => ({ ...patient, key: patient.id }))}
            pagination={false}
            className="table--patients"
          />
          <Pagination
            current={page}
            pageSize={pageLimit}
            total={patients?.count}
            onChange={onPageChange}
            showSizeChanger={false}
          />
        </TablePatients>
        <NewPatient
          visible={createPatientVisible}
          onClose={hiddenCreation}
          onFinish={onPatientsChange}
        />
        {
          selectedPatient
            ? (
              <PatientProfile
                patientData={selectedPatient}
                visible={visiblePatient}
                onClose={closePatientProfile}
              />
            )
            : null
        }
      </Wrapper>
    </>
  );
};

export default Patients;
