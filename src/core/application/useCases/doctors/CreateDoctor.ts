import { Doctor, CreateDoctorDTO } from '../../../domain/entities/Doctor';
import { IDoctorRepository } from '../../../ports/repositories/IDoctorRepository';

export class CreateDoctorUseCase {
  constructor(private readonly doctorRepository: IDoctorRepository) {}

  async execute(doctorData: CreateDoctorDTO): Promise<Doctor> {
    if (!doctorData.name || doctorData.name.trim().length < 2) {
      throw new Error('El nombre debe tener al menos 2 caracteres');
    }

    if (!doctorData.email || !this.isValidEmail(doctorData.email)) {
      throw new Error('Email inválido');
    }

    if (!doctorData.specialty || doctorData.specialty.trim().length < 2) {
      throw new Error('La especialidad es requerida');
    }

    return this.doctorRepository.save(doctorData);
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}