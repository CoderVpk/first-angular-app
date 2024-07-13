import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type TaskModel } from "../model/task.model"

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input({required: true}) task?: TaskModel;
  @Output() complete=new EventEmitter<string>();
  completeTask(){
    this.complete.emit(this.task?.id);
  }
}
