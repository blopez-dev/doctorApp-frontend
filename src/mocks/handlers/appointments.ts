import { http, HttpResponse } from 'msw';
import { mockAppointments } from '../data/appointments';

let appointments = [...mockAppointments];

export const appointmentsHandlers = [
  http.get('/api/appointments', () => {
    return HttpResponse.json(appointments);
  }),

  http.get('/api/appointments/:id', ({ params }) => {
    const appointment = appointments.find((a) => a.id === params.id);
    if (!appointment) {
      return HttpResponse.json({ error: 'Appointment no encontrado' }, { status: 404 });
    }
    return HttpResponse.json(appointment);
  }),

  http.post('/api/appointments', async ({ request }) => {
    const body = await request.json();

    if (!body.patientId) {
      return HttpResponse.json({ error: 'Patient ID es requerido' }, { status: 400 });
    }

    if (!body.doctorId) {
      return HttpResponse.json({ error: 'Doctor ID es requerido' }, { status: 400 });
    }

    if (!body.roomId) {
      return HttpResponse.json({ error: 'Room ID es requerido' }, { status: 400 });
    }

    if (!body.startTime || !body.endTime) {
      return HttpResponse.json(
        { error: 'Las horas de inicio y fin son requeridas' },
        { status: 400 }
      );
    }

    const start = new Date(body.startTime);
    const end = new Date(body.endTime);

    if (start >= end) {
      return HttpResponse.json(
        { error: 'La hora de fin debe ser posterior a la hora de inicio' },
        { status: 400 }
      );
    }

    const newAppointment = {
      id: String(Date.now()),
      patientId: body.patientId,
      doctorId: body.doctorId,
      roomId: body.roomId,
      startTime: body.startTime,
      endTime: body.endTime,
      status: 'SCHEDULED',
      notes: body.notes || '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    appointments.push(newAppointment);
    return HttpResponse.json(newAppointment, { status: 201 });
  }),

  http.patch('/api/appointments/:id/cancel', ({ params }) => {
    const index = appointments.findIndex((a) => a.id === params.id);

    if (index === -1) {
      return HttpResponse.json({ error: 'Appointment no encontrado' }, { status: 404 });
    }

    appointments[index] = {
      ...appointments[index],
      status: 'CANCELLED',
      updatedAt: new Date().toISOString(),
    };

    return HttpResponse.json(appointments[index]);
  }),
];