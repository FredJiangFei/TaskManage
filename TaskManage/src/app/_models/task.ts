export interface Task {
  id: number;
  title: string;
  description: string;
  order: number;
  completed: boolean;
  duteDate: Date;
  created: Date;
  lineId: number;
}
