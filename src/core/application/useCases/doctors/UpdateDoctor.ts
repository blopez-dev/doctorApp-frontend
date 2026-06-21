import { Doctor, UpdateDoctorDTO } from '../../../domain/entities/Doctor';
import { IDoctorRepository } from '../../../ports/repositories/IDoctorRepository';

export class UpdateDoctorUseCase {
  constructor(private readonly doctorRepository: IDoctorRepository) {}

  async execute(id: string, doctorData: UpdateDoctorDTO): Promise<Doctor> {
    if (!id) {
      throw new Error('Doctor ID es requerido');
    }

    const existingDoctor = await this.doctorRepository.findById(id);
    if (!existingDoctor) {
      throw new Error('Doctor no encontrado');
    }

    return this.doctorRepository.update(id, doctorData);
  }
}