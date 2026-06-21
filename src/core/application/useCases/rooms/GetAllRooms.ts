import { Room } from '../../../domain/entities/Room';
import { IRoomRepository } from '../../../ports/repositories/IRoomRepository';

export class GetAllRoomsUseCase {
  constructor(private readonly roomRepository: IRoomRepository) {}

  async execute(): Promise<Room[]> {
    return this.roomRepository.findAll();
  }
}