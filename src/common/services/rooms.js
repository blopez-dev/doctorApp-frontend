import { GetAllRoomsUseCase } from '../../core/application/useCases/rooms';
import { roomRepository } from '../repositories/RoomRepository';

const getAllRoomsUseCase = new GetAllRoomsUseCase(roomRepository);

const getAllRooms = () => getAllRoomsUseCase.execute();

export default getAllRooms;
export { getAllRooms };