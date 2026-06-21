import React, { useState, useEffect } from 'react';
import { Button, message, Modal, Form, Select, DatePicker, Space } from 'antd';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import dayjs from 'dayjs';
import getAllAppointments from '../../../common/services/appoinments';
import { getAllUsers } from '../../../common/services/users';
import { getAllPatients } from '../../../common/services/patients';
import { getAllRooms } from '../../../common/services/rooms';

const { RangePicker } = DatePicker;

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const fetchData = async () => {
    setLoading(true);
    try {
      const [appointmentsData, doctorsData, patientsData, roomsData] = await Promise.all([
        getAllAppointments(),
        getAllUsers(),
        getAllPatients(),
        getAllRooms(),
      ]);
      setAppointments(appointmentsData);
      setDoctors(doctorsData);
      setPatients(patientsData);
      setRooms(roomsData);
    } catch (error) {
      message.error('Error al cargar datos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const calendarEvents = appointments.map((apt) => ({
    id: apt.id,
    title: `Cita #${apt.id}`,
    start: apt.startTime,
    end: apt.endTime,
    backgroundColor: apt.status === 'CANCELLED' ? '#ff4d4f' : '#1890ff',
    extendedProps: {
      status: apt.status,
      notes: apt.notes,
    },
  }));

  return (
    <div style={{ padding: 24 }}>
      <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Citas</h2>
        <Button type="primary" onClick={() => setIsModalOpen(true)}>
          Nueva Cita
        </Button>
      </div>

      <div style={{ background: '#fff', padding: 16, borderRadius: 8 }}>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          events={calendarEvents}
          editable
          selectable
          slotMinTime="08:00:00"
          slotMaxTime="18:00:00"
          height="auto"
        />
      </div>

      <Modal
        title="Nueva Cita"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        width={500}
      >
        <Form form={form} layout="vertical" onFinish={() => setIsModalOpen(false)}>
          <Form.Item name="patientId" label="Paciente" rules={[{ required: true }]}>
            <Select>
              {patients.map((p) => (
                <Select.Option key={p.id} value={p.id}>{p.name}</Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="doctorId" label="Doctor" rules={[{ required: true }]}>
            <Select>
              {doctors.map((d) => (
                <Select.Option key={d.id} value={d.id}>{d.name} - {d.specialty}</Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="roomId" label="Sala" rules={[{ required: true }]}>
            <Select>
              {rooms.map((r) => (
                <Select.Option key={r.id} value={r.id}>{r.name}</Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="dateRange" label="Fecha y Hora" rules={[{ required: true }]}>
            <RangePicker showTime style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="notes" label="Notas">
            <Input.TextArea rows={3} />
          </Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">Guardar</Button>
            <Button onClick={() => setIsModalOpen(false)}>Cancelar</Button>
          </Space>
        </Form>
      </Modal>
    </div>
  );
};

export default Appointments;