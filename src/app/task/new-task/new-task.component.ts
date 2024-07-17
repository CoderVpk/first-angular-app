import { Component, EventEmitter, Input, output, input, Output, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type TaskModel } from "../model/task.model"
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  private tasksService=inject(TasksService);

  @Input() taskUserId?:string;
  @Output() close=new EventEmitter<void>();

  titleInput='';
  inputsummary='';
  inputDate='';

  // using signals
  // titleInput=signal('');
  // inputsummary=signal('');
  // inputDate=signal('');

  onCancelTask(){
    this.close.emit();
  }

  onFormSubmit(){
    console.log("form submission event");
    let newTask:TaskModel={id: new Date().getTime().toString(),
      userId: this.taskUserId!,
      title: this.titleInput,
      summary: this.inputsummary,
      dueDate: this.inputDate
    };
    this.tasksService.addTask(newTask);
    this.close.emit();
  }
}
