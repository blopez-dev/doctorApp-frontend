import { Appointment, CreateAppointmentDTO, UpdateAppointmentDTO, AppointmentStatus } from '../../domain/entities/Appointment';

export interface IAppointmentRepository {
  findAll(): Promise<Appointment[]>;
  findById(id: string): Promise<Appointment | null>;
  save(appointment: CreateAppointmentDTO): Promise<Appointment>;
  update(id: string, appointment: UpdateAppointmentDTO): Promise<Appointment>;
  updateStatus(id: string, status: AppointmentStatus): Promise<Appointment>;
  delete(id: string): Promise<void>;
}