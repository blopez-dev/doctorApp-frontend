import { IPatientRepository } from '../../../ports/repositories/IPatientRepository';

export class DeletePatientUseCase {
  constructor(private readonly patientRepository: IPatientRepository) {}

  async execute(id: string): Promise<void> {
    if (!id) {
      throw new Error('Patient ID es requerido');
    }

    const existingPatient = await this.patientRepository.findById(id);
    if (!existingPatient) {
      throw new Error('Patient no encontrado');
    }

    await this.patientRepository.delete(id);
  }
}