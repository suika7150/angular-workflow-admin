//規格
export interface Task {
  id: number;
  title: string;
  assignee: string;
  status: 'Todo' | 'In Progress' | 'Done';
  dueDate: string;
}
