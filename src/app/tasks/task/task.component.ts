import {Component, EventEmitter, Input, Output} from '@angular/core';
import {task} from "./task.model";
import {CardComponent} from "../../ui/card/card.component";
import {DatePipe} from "@angular/common";
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CardComponent,
    DatePipe
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) selectedTasks!:task ;
  // Event
  // constructer
  private taskservice:TasksService;
  constructor(tasksService : TasksService) {
    this.taskservice = tasksService;
  }


  //method
  completeTask()
  {
    this.taskservice.removeTask(this.selectedTasks.id)

  }

}
