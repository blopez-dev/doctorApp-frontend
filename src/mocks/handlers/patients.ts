import { http, HttpResponse } from 'msw';
import { mockPatients } from '../data/patients';

let patients = [...mockPatients];

export const patientsHandlers = [
  http.get('/api/patients', () => {
    return HttpResponse.json(patients);
  }),

  http.get('/api/patients/:id', ({ params }) => {
    const patient = patients.find((p) => p.id === params.id);
    if (!patient) {
      return HttpResponse.json({ error: 'Patient no encontrado' }, { status: 404 });
    }
    return HttpResponse.json(patient);
  }),

  http.post('/api/patients', async ({ request }) => {
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

    if (!body.phone) {
      return HttpResponse.json({ error: 'El teléfono es requerido' }, { status: 400 });
    }

    const newPatient = {
      id: String(Date.now()),
      name: body.name,
      email: body.email,
      phone: body.phone,
      address: body.address || '',
      pathologies: body.pathologies || '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    patients.push(newPatient);
    return HttpResponse.json(newPatient, { status: 201 });
  }),

  http.put('/api/patients/:id', async ({ params, request }) => {
    const body = await request.json();
    const index = patients.findIndex((p) => p.id === params.id);

    if (index === -1) {
      return HttpResponse.json({ error: 'Patient no encontrado' }, { status: 404 });
    }

    patients[index] = {
      ...patients[index],
      ...body,
      updatedAt: new Date().toISOString(),
    };

    return HttpResponse.json(patients[index]);
  }),

  http.delete('/api/patients/:id', ({ params }) => {
    const index = patients.findIndex((p) => p.id === params.id);

    if (index === -1) {
      return HttpResponse.json({ error: 'Patient no encontrado' }, { status: 404 });
    }

    patients = patients.filter((p) => p.id !== params.id);
    return new HttpResponse(null, { status: 204 });
  }),
];