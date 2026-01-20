import { Component, OnInit } from '@angular/core';
import { TaskListComponent } from '../../components/task-list/task-list.component';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [TaskListComponent],
})
export class DashboardComponent implements OnInit {
  tasks: Task[] = [];

  total = 0;
  done = 0;
  pending = 0;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
    this.calculateStats();
  }

  private calculateStats(): void {
    this.total = this.tasks.length;
    this.done = this.tasks.filter((t) => t.completed).length;
    this.pending = this.total - this.done;
  }
}
