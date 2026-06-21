import { Room, CreateRoomDTO, UpdateRoomDTO } from '../../domain/entities/Room';

export interface IRoomRepository {
  findAll(): Promise<Room[]>;
  findById(id: string): Promise<Room | null>;
  save(room: CreateRoomDTO): Promise<Room>;
  update(id: string, room: UpdateRoomDTO): Promise<Room>;
  delete(id: string): Promise<void>;
}