import { Appointment } from '../../../domain/entities/Appointment';
import { IAppointmentRepository } from '../../../ports/repositories/IAppointmentRepository';

export class GetAllAppointmentsUseCase {
  constructor(private readonly appointmentRepository: IAppointmentRepository) {}

  async execute(): Promise<Appointment[]> {
    return this.appointmentRepository.findAll();
  }
}