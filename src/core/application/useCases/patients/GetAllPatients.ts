import { Patient } from '../../../domain/entities/Patient';
import { IPatientRepository } from '../../../ports/repositories/IPatientRepository';

export class GetAllPatientsUseCase {
  constructor(private readonly patientRepository: IPatientRepository) {}

  async execute(): Promise<Patient[]> {
    return this.patientRepository.findAll();
  }
}