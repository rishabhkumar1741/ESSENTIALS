import {Component, Input} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {NewTaskComponent} from "./new-task/new-task.component";
import {type NewTaskModels} from "./new-task/new-task.models";
import {TasksService} from "./tasks.service";


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) name:string|undefined;
  @Input({required:true}) id!:string;
  @Input()addTaskvariable:boolean = false;
 private taskservice:TasksService;

  constructor( taskservice:TasksService ) {
    this.taskservice = taskservice;
  }



   get selectedTasks() {
     return this.taskservice.getUserTask(this.id);
   }



  addTask()
  {
    this.addTaskvariable = true;
  }
  onCancelAddTask()
  {
    this.addTaskvariable = false;
  }
}
