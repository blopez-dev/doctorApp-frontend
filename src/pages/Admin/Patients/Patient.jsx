import React, { useState, useEffect } from 'react';
import { Pagination, Spin, Table } from 'antd';
import { deletePatient, getAllPatients } from 'common/services/patients';
import NewPatient from './components/NewPatient/NewPatient';
import CreateTitle from '../../../application/components/Title/Title';
import PatientProfile from './components/PatientProfile/PatientProfile';
import { columns } from './config/columns';
import { Wrapper, TablePatients, AddNew, CustomRow } from './styles';

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
            columns={columns(showPatientProfile, onDeletePatient)}
            dataSource={patients?.rows.map((patient) => ({ ...patient, key: patient.id }))}
            pagination={false}
            className="table--patients"
          />
          <Pagination
            current={page}
            pageSize={pageLimit}
            total={patients?.count}
            onChange={setPage}
            showSizeChanger={false}
          />
        </TablePatients>
        <NewPatient
          visible={createPatientVisible}
          onClose={hiddenCreation}
          onFinish={onPatientsChange}
        />
        {selectedPatient && (
          <PatientProfile
            patientId={selectedPatient}
            visible={visiblePatient}
            onClose={closePatientProfile}
          />
        )}
      </Wrapper>
    </>
  );
};

export default Patients;
