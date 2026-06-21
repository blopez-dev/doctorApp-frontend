import { Appointment, AppointmentStatus } from '../../../domain/entities/Appointment';
import { IAppointmentRepository } from '../../../ports/repositories/IAppointmentRepository';

export class CancelAppointmentUseCase {
  constructor(private readonly appointmentRepository: IAppointmentRepository) {}

  async execute(id: string): Promise<Appointment> {
    if (!id) {
      throw new Error('Appointment ID es requerido');
    }

    const existingAppointment = await this.appointmentRepository.findById(id);
    if (!existingAppointment) {
      throw new Error('Appointment no encontrado');
    }

    return this.appointmentRepository.updateStatus(id, AppointmentStatus.CANCELLED);
  }
}