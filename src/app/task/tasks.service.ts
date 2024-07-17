import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-tasks';
import { TaskModel } from './model/task.model';

@Injectable({
  providedIn:"root"
})
export class TasksService {

  constructor() { 
    const tasks=localStorage.getItem("tasks");
    if(tasks){
      this.tasks=JSON.parse(tasks);
    }
  }

  private tasks =DUMMY_TASKS;

  getUserTasks(userId:string){
    return this.tasks.filter((task) => {return (task.userId === userId)});
  }

  addTask(task:TaskModel){
    this.tasks.unshift(task);
    this.saveTask();
  }

  removeTask(taskId:string){
    this.tasks = this.tasks.filter(task => task.id!==taskId);
    this.saveTask();
  }

  private saveTask(){
    localStorage.setItem("tasks",JSON.stringify(this.tasks));
  }
}
