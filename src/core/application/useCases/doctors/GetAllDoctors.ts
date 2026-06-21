import { Doctor } from '../../../domain/entities/Doctor';
import { IDoctorRepository } from '../../../ports/repositories/IDoctorRepository';

export class GetAllDoctorsUseCase {
  constructor(private readonly doctorRepository: IDoctorRepository) {}

  async execute(): Promise<Doctor[]> {
    return this.doctorRepository.findAll();
  }
}