import React, { useState, useEffect } from 'react';
import { Button, Drawer, Form, Input } from 'antd';
import { getPatientById, updateById } from 'common/services/patients';

const PatientProfile = ({ patientData, visible, onClose }) => {
  const [patient, setPatient] = useState(null);
  const onFinish = async (values) => {
    await updateById(patient.id, values);
  };
  useEffect(() => {
    if (!patient) {
      getPatientById(patientData).then(setPatient);
    }
  }, [patient]);
  return (
    <>
      <Drawer
        width={480}
        visible={visible}
        onClose={onClose}
        placement="right"
        title=""
        className="drawer-info"
      >
        {patient && (
        <div>
          <Form layout="vertical" initialValues={patient} onFinish={onFinish}>
            <Form.Item label="Nombre" name="name" required>
              <Input placeholder="Nombre" />
            </Form.Item>
            <Form.Item label="Email" name="email" required>
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item label="Telefono" name="phone" required>
              <Input placeholder="Teléfono" />
            </Form.Item>
            <Form.Item label="Descripcion" name="address" required>
              <Input placeholder="Descripción" />
            </Form.Item>
            <Form.Item label="Patologias" name="pathologies" required>
              <Input placeholder="Patologías" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">Actualizar</Button>
            </Form.Item>
          </Form>
        </div>

        )}

      </Drawer>
    </>
  );
};
export default PatientProfile;
