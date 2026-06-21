import { Doctor, CreateDoctorDTO, UpdateDoctorDTO } from '../../domain/entities/Doctor';

export interface IDoctorRepository {
  findAll(): Promise<Doctor[]>;
  findById(id: string): Promise<Doctor | null>;
  save(doctor: CreateDoctorDTO): Promise<Doctor>;
  update(id: string, doctor: UpdateDoctorDTO): Promise<Doctor>;
  delete(id: string): Promise<void>;
}