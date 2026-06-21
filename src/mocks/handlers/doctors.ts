import { http, HttpResponse } from 'msw';
import { mockDoctors } from '../data/doctors';

let doctors = [...mockDoctors];

export const doctorsHandlers = [
  http.get('/api/doctors', () => {
    return HttpResponse.json(doctors);
  }),

  http.get('/api/doctors/:id', ({ params }) => {
    const doctor = doctors.find((d) => d.id === params.id);
    if (!doctor) {
      return HttpResponse.json({ error: 'Doctor no encontrado' }, { status: 404 });
    }
    return HttpResponse.json(doctor);
  }),

  http.post('/api/doctors', async ({ request }) => {
    const body = await request.json();

    if (!body.name || body.name.trim().length < 2) {
      return HttpResponse.json(
        { error: 'El nombre debe tener al menos 2 caracteres' },
        { status: 400 }
      );
    }

    if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return HttpResponse.json({ error: 'Email inválido' }, { status: 400 });
    }

    const newDoctor = {
      id: String(Date.now()),
      name: body.name,
      email: body.email,
      specialty: body.specialty || '',
      phone: body.phone || '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    doctors.push(newDoctor);
    return HttpResponse.json(newDoctor, { status: 201 });
  }),

  http.put('/api/doctors/:id', async ({ params, request }) => {
    const body = await request.json();
    const index = doctors.findIndex((d) => d.id === params.id);

    if (index === -1) {
      return HttpResponse.json({ error: 'Doctor no encontrado' }, { status: 404 });
    }

    doctors[index] = {
      ...doctors[index],
      ...body,
      updatedAt: new Date().toISOString(),
    };

    return HttpResponse.json(doctors[index]);
  }),

  http.delete('/api/doctors/:id', ({ params }) => {
    const index = doctors.findIndex((d) => d.id === params.id);

    if (index === -1) {
      return HttpResponse.json({ error: 'Doctor no encontrado' }, { status: 404 });
    }

    doctors = doctors.filter((d) => d.id !== params.id);
    return new HttpResponse(null, { status: 204 });
  }),
];