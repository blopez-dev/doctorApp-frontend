import { Patient, CreatePatientDTO, UpdatePatientDTO } from '../../domain/entities/Patient';

export interface IPatientRepository {
  findAll(): Promise<Patient[]>;
  findById(id: string): Promise<Patient | null>;
  save(patient: CreatePatientDTO): Promise<Patient>;
  update(id: string, patient: UpdatePatientDTO): Promise<Patient>;
  delete(id: string): Promise<void>;
}