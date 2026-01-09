/**
 * TaskItemComponent
 * -------------------------
 * 單一任務顯示元件
 *
 * 職責：
 * - 接收父層傳入的 task
 * - 只負責顯示，不處理商業邏輯
 */

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../../models/task.model';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-item.component.html',
})

/**
 * 父元件傳入的任務資料
 * @Input 代表資料由外部傳進來
 */
export class TaskItemComponent {
  @Input() task!: Task;
}
