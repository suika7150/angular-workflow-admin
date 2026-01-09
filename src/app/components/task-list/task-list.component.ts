import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { TaskItemComponent } from './task-item/task-item.component';

/**
 * 任務列表畫面元件
 *
 * 負責：
 * - 取得任務資料
 * - 將每筆任務交給 TaskItemComponent 顯示
 *
 */

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})

//任務列表
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  //透過 Angular Dependency Injection 注入 TaskService
  constructor(private taskService: TaskService) {}

  //初始化生命週期
  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }
}
