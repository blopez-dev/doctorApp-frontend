import { Patient, UpdatePatientDTO } from '../../../domain/entities/Patient';
import { IPatientRepository } from '../../../ports/repositories/IPatientRepository';

export class UpdatePatientUseCase {
  constructor(private readonly patientRepository: IPatientRepository) {}

  async execute(id: string, patientData: UpdatePatientDTO): Promise<Patient> {
    if (!id) {
      throw new Error('Patient ID es requerido');
    }

    const existingPatient = await this.patientRepository.findById(id);
    if (!existingPatient) {
      throw new Error('Patient no encontrado');
    }

    return this.patientRepository.update(id, patientData);
  }
}