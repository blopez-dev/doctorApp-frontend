export enum AppointmentStatus {
  SCHEDULED = 'SCHEDULED',
  CONFIRMED = 'CONFIRMED',
  CANCELLED = 'CANCELLED',
  COMPLETED = 'COMPLETED',
}

export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  roomId: string;
  startTime: Date;
  endTime: Date;
  status: AppointmentStatus;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateAppointmentDTO = Omit<Appointment, 'id' | 'status' | 'createdAt' | 'updatedAt'>;
export type UpdateAppointmentDTO = Partial<CreateAppointmentDTO>;