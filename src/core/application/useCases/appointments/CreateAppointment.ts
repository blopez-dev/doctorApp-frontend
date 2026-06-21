import { Appointment, CreateAppointmentDTO } from '../../../domain/entities/Appointment';
import { IAppointmentRepository } from '../../../ports/repositories/IAppointmentRepository';

export class CreateAppointmentUseCase {
  constructor(private readonly appointmentRepository: IAppointmentRepository) {}

  async execute(appointmentData: CreateAppointmentDTO): Promise<Appointment> {
    if (!appointmentData.patientId) {
      throw new Error('Patient ID es requerido');
    }

    if (!appointmentData.doctorId) {
      throw new Error('Doctor ID es requerido');
    }

    if (!appointmentData.roomId) {
      throw new Error('Room ID es requerido');
    }

    if (!appointmentData.startTime || !appointmentData.endTime) {
      throw new Error('Las horas de inicio y fin son requeridas');
    }

    if (new Date(appointmentData.startTime) >= new Date(appointmentData.endTime)) {
      throw new Error('La hora de fin debe ser posterior a la hora de inicio');
    }

    return this.appointmentRepository.save(appointmentData);
  }
}