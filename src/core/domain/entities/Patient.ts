export interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
  address?: string;
  pathologies?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type CreatePatientDTO = Omit<Patient, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdatePatientDTO = Partial<CreatePatientDTO>;