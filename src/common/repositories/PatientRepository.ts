import { IPatientRepository } from '../../core/ports/repositories/IPatientRepository';
import http from '../adapters/http';

export class PatientRepositoryImpl implements IPatientRepository {
  async findAll() {
    const { data } = await http.get('/patients');
    return data;
  }

  async findById(id) {
    const { data } = await http.get(`/patients/${id}`);
    return data;
  }

  async save(patient) {
    const { data } = await http.post('/patients', patient);
    return data;
  }

  async update(id, patient) {
    const { data } = await http.put(`/patients/${id}`, patient);
    return data;
  }

  async delete(id) {
    await http.delete(`/patients/${id}`);
  }
}

export const patientRepository = new PatientRepositoryImpl();