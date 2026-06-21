import { GetAllAppointmentsUseCase, CreateAppointmentUseCase } from '../../core/application/useCases/appointments';
import { appointmentRepository } from '../repositories/AppointmentRepository';

const getAllAppointmentsUseCase = new GetAllAppointmentsUseCase(appointmentRepository);
const createAppointmentUseCase = new CreateAppointmentUseCase(appointmentRepository);

const getAllAppointments = () => getAllAppointmentsUseCase.execute();
const createAppointment = (appointment) => createAppointmentUseCase.execute(appointment);

export default getAllAppointments;
export { getAllAppointments, createAppointment };