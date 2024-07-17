import { Component, inject, Input } from '@angular/core';
import { type TaskModel } from "../model/task.model";
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  private tasksService=inject(TasksService);
  @Input({required: true}) task?: TaskModel;
  completeTask(){
    this.tasksService.removeTask(this.task?.id!);
  }
}
