import { Task } from './task';

export interface TaskLine {
  id: number;
  title: string;
  order: number;
  created: Date;
  tasks: Task[];
}
