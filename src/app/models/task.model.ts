//資料規格

export interface Task {
  id: number;
  title: string;
  assignee: string;
  completed: boolean;
  status: 'Todo' | 'In Progress' | 'Done';
  dueDate: string;
}
