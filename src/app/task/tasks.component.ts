import { Component, EventEmitter, Input, Output, signal, Signal } from '@angular/core';
import {User} from "../user.model";
import { NgFor,NgIf } from '@angular/common';
import { TaskItemComponent } from "./task-item/task-item.component";
import { TaskModel } from "./model/task.model"
import { DUMMY_TASKS } from '../dummy-tasks';
import { NewTaskComponent } from "../task/new-task/new-task.component";
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [NgFor, NgIf, TaskItemComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TaskComponent {
  constructor(private taskService: TasksService){
  }

  @Input({required: true}) selectedUser: User|undefined;

  @Output() newTaskEvent = new EventEmitter<boolean>();
  @Input() showNewTask=false;

  get selecteduserTasks(){
    return this.taskService.getUserTasks(this.selectedUser?.id!);
  }
  
  onStartNewTask(){
    this.newTaskEvent.emit(true);
  }

  disableShowTask(){
    this.showNewTask=false;
  }

}
