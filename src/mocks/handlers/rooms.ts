import { http, HttpResponse } from 'msw';
import { mockRooms } from '../data/rooms';

let rooms = [...mockRooms];

export const roomsHandlers = [
  http.get('/api/rooms', () => {
    return HttpResponse.json(rooms);
  }),

  http.get('/api/rooms/:id', ({ params }) => {
    const room = rooms.find((r) => r.id === params.id);
    if (!room) {
      return HttpResponse.json({ error: 'Room no encontrado' }, { status: 404 });
    }
    return HttpResponse.json(room);
  }),

  http.post('/api/rooms', async ({ request }) => {
    const body = await request.json();

    if (!body.name || body.name.trim().length < 2) {
      return HttpResponse.json(
        { error: 'El nombre de la sala debe tener al menos 2 caracteres' },
        { status: 400 }
      );
    }

    if (!body.capacity || body.capacity < 1) {
      return HttpResponse.json(
        { error: 'La capacidad debe ser al menos 1' },
        { status: 400 }
      );
    }

    const newRoom = {
      id: String(Date.now()),
      name: body.name,
      capacity: body.capacity,
      isAvailable: body.isAvailable ?? true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    rooms.push(newRoom);
    return HttpResponse.json(newRoom, { status: 201 });
  }),
];