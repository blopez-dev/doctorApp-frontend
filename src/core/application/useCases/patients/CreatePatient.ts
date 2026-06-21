import { Patient, CreatePatientDTO } from '../../../domain/entities/Patient';
import { IPatientRepository } from '../../../ports/repositories/IPatientRepository';

export class CreatePatientUseCase {
  constructor(private readonly patientRepository: IPatientRepository) {}

  async execute(patientData: CreatePatientDTO): Promise<Patient> {
    if (!patientData.name || patientData.name.trim().length < 2) {
      throw new Error('El nombre debe tener al menos 2 caracteres');
    }

    if (!patientData.email || !this.isValidEmail(patientData.email)) {
      throw new Error('Email inválido');
    }

    if (!patientData.phone) {
      throw new Error('El teléfono es requerido');
    }

    return this.patientRepository.save(patientData);
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}