import { User } from './user';

export interface Comment {
  id: number;
  description: string;
  created: Date;
  createdBy: User;
  taskId: number;
}
