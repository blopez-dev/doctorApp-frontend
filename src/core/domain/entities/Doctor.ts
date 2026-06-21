export interface Doctor {
  id: string;
  name: string;
  email: string;
  specialty: string;
  phone?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateDoctorDTO = Omit<Doctor, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateDoctorDTO = Partial<CreateDoctorDTO>;