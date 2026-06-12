import React, { useState, useEffect } from 'react';
import date from 'dayjs';
import FullCalendar from '@fullcalendar/react';
import { config, eventFormat } from './config/config';
import getAllAppointments from '../../../common/services/appoinments';
import getAllRooms from '../../../common/services/rooms';

const Schedule = () => {
  const [appointments, setAppointments] = useState([]);
  const [createAppointmenttVisible, setCreateAppointmentVisible] = useState(false);
  const [rooms, setRooms] = useState([]);

  const onCreateAppointment = () => setCreateAppointmentVisible(true);

  useEffect(() => {
    getAllRooms().then(setRooms);
    getAllAppointments().then(setAppointments);
  }, []);

  return (

    <FullCalendar
      {...config}
      slotMinTime="08:00:00"
      slotMaxTime="15:00:00"
      resources={rooms.map((room) => ({ id: room.id, title: room.name }))}
      events={appointments.map(({ startTime, endTime, patient, user, room }) => ({
        start: date(startTime).format(eventFormat),
        end: date(endTime).format(eventFormat),
        title: `${patient.name} - ${user.name}`,
        resourceId: room.id
      }))}
    />
  );
};

export default Schedule;
