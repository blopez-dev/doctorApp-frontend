export interface Room {
  id: string;
  name: string;
  capacity: number;
  isAvailable: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateRoomDTO = Omit<Room, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateRoomDTO = Partial<CreateRoomDTO>;