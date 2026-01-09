import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

/**
 * TaskListComponent
 * ----------------------------------------
 * 任務列表畫面元件
 *
 * 負責：
 * - 向 TaskService 取得任務資料
 * - 將任務列表顯示在畫面上
 *
 * 不負責：
 * - 任務資料來源
 * - 商業邏輯（交由 Service 處理）
 */

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
})

//提供畫面使用的任務列表
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  //透過 Angular Dependency Injection 注入 TaskService
  constructor(private taskService: TaskService) {}

  //初始化生命週期
  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }
}
