import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [
    {
      id: 1,
      title: 'Angular Project',
      assignee: 'Alex',
      status: 'Done',
      dueDate: '2026-01-05',
    },
    {
      id: 2,
      title: '任務列表頁',
      assignee: 'Lucas',
      status: 'In Progress',
      dueDate: '2026-01-10',
    },
  ];

  getTasks(): Task[] {
    return this.tasks;
  }
}
