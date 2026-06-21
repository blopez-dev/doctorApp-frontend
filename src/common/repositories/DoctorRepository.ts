import { IDoctorRepository } from '../../core/ports/repositories/IDoctorRepository';
import http from '../adapters/http';

export class DoctorRepositoryImpl implements IDoctorRepository {
  async findAll() {
    const { data } = await http.get('/doctors');
    return data;
  }

  async findById(id) {
    const { data } = await http.get(`/doctors/${id}`);
    return data;
  }

  async save(doctor) {
    const { data } = await http.post('/doctors', doctor);
    return data;
  }

  async update(id, doctor) {
    const { data } = await http.put(`/doctors/${id}`, doctor);
    return data;
  }

  async delete(id) {
    await http.delete(`/doctors/${id}`);
  }
}

export const doctorRepository = new DoctorRepositoryImpl();