import { GetAllDoctorsUseCase, CreateDoctorUseCase, UpdateDoctorUseCase, DeleteDoctorUseCase } from '../../core/application/useCases/doctors';
import { doctorRepository } from '../repositories/DoctorRepository';

const getAllDoctorsUseCase = new GetAllDoctorsUseCase(doctorRepository);
const createDoctorUseCase = new CreateDoctorUseCase(doctorRepository);
const updateDoctorUseCase = new UpdateDoctorUseCase(doctorRepository);
const deleteDoctorUseCase = new DeleteDoctorUseCase(doctorRepository);

export const getAllUsers = () => getAllDoctorsUseCase.execute();
export const createUser = (user) => createDoctorUseCase.execute(user);
export const deleteUser = (id) => deleteDoctorUseCase.execute(id);
export const updateById = (id, data) => updateDoctorUseCase.execute(id, data);
export const getUser = (id) => doctorRepository.findById(id);