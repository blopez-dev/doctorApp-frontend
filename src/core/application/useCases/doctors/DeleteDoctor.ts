import { IDoctorRepository } from '../../../ports/repositories/IDoctorRepository';

export class DeleteDoctorUseCase {
  constructor(private readonly doctorRepository: IDoctorRepository) {}

  async execute(id: string): Promise<void> {
    if (!id) {
      throw new Error('Doctor ID es requerido');
    }

    const existingDoctor = await this.doctorRepository.findById(id);
    if (!existingDoctor) {
      throw new Error('Doctor no encontrado');
    }

    await this.doctorRepository.delete(id);
  }
}