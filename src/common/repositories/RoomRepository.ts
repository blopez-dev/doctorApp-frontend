import { IRoomRepository } from '../../core/ports/repositories/IRoomRepository';
import http from '../adapters/http';

export class RoomRepositoryImpl implements IRoomRepository {
  async findAll() {
    const { data } = await http.get('/rooms');
    return data;
  }

  async findById(id) {
    const { data } = await http.get(`/rooms/${id}`);
    return data;
  }

  async save(room) {
    const { data } = await http.post('/rooms', room);
    return data;
  }

  async update(id, room) {
    const { data } = await http.put(`/rooms/${id}`, room);
    return data;
  }

  async delete(id) {
    await http.delete(`/rooms/${id}`);
  }
}

export const roomRepository = new RoomRepositoryImpl();