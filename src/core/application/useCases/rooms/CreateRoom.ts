import { CreateRoomDTO, Room } from '../../../domain/entities/Room';
import { IRoomRepository } from '../../../ports/repositories/IRoomRepository';

export class CreateRoomUseCase {
  constructor(private readonly roomRepository: IRoomRepository) {}

  async execute(roomData: CreateRoomDTO): Promise<Room> {
    if (!roomData.name || roomData.name.trim().length < 2) {
      throw new Error('El nombre de la sala debe tener al menos 2 caracteres');
    }

    if (!roomData.capacity || roomData.capacity < 1) {
      throw new Error('La capacidad debe ser al menos 1');
    }

    return this.roomRepository.save(roomData);
  }
}