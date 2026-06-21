import { GetAllPatientsUseCase, CreatePatientUseCase, UpdatePatientUseCase, DeletePatientUseCase } from '../../core/application/useCases/patients';
import { patientRepository } from '../repositories/PatientRepository';

const getAllPatientsUseCase = new GetAllPatientsUseCase(patientRepository);
const createPatientUseCase = new CreatePatientUseCase(patientRepository);
const updatePatientUseCase = new UpdatePatientUseCase(patientRepository);
const deletePatientUseCase = new DeletePatientUseCase(patientRepository);

export const getAllPatients = () => getAllPatientsUseCase.execute();
export const createPatient = (patient) => createPatientUseCase.execute(patient);
export const deletePatient = (id) => deletePatientUseCase.execute(id);
export const updateById = (id, data) => updatePatientUseCase.execute(id, data);
export const getPatientById = (id) => patientRepository.findById(id);