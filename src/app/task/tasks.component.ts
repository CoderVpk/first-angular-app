import { Component, EventEmitter, Input, Output, signal, Signal } from '@angular/core';
import {User} from "../user.model";
import { NgFor,NgIf } from '@angular/common';
import { TaskItemComponent } from "./task-item/task-item.component";
import { TaskModel } from "./model/task.model"
import { DUMMY_TASKS } from '../dummy-tasks';
import { NewTaskComponent } from "../task/new-task/new-task.component";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [NgFor, NgIf, TaskItemComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TaskComponent {
  @Input({required: true}) selectedUser: User|undefined;
  tasks =DUMMY_TASKS;

  @Output() newTaskEvent = new EventEmitter<boolean>();
  @Input() showNewTask=false;

  get selecteduserTasks(){
    let selectedTasks = this.tasks.filter((task) => {return (task.userId === this.selectedUser?.id)});
    console.log("userID == "+this.selectedUser?.id);
    return selectedTasks;
  }
  deleteTask(taskID:string){
    this.tasks = this.tasks.filter(task => task.id!==taskID)
  }
  onStartNewTask(){
    this.newTaskEvent.emit(true);
  }
}
