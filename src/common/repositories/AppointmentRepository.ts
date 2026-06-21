import { IAppointmentRepository } from '../../core/ports/repositories/IAppointmentRepository';
import { AppointmentStatus } from '../../core/domain/entities/Appointment';
import http from '../adapters/http';

export class AppointmentRepositoryImpl implements IAppointmentRepository {
  async findAll() {
    const { data } = await http.get('/appointments');
    return data;
  }

  async findById(id) {
    const { data } = await http.get(`/appointments/${id}`);
    return data;
  }

  async save(appointment) {
    const { data } = await http.post('/appointments', appointment);
    return data;
  }

  async update(id, appointment) {
    const { data } = await http.put(`/appointments/${id}`, appointment);
    return data;
  }

  async updateStatus(id, status) {
    const { data } = await http.patch(`/appointments/${id}/cancel`, { status });
    return data;
  }

  async delete(id) {
    await http.delete(`/appointments/${id}`);
  }
}

export const appointmentRepository = new AppointmentRepositoryImpl();