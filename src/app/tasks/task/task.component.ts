import {Component, EventEmitter, Input, Output} from '@angular/core';
import {task} from "./task.model";
import {CardComponent} from "../../ui/card/card.component";
import {DatePipe} from "@angular/common";

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
  @Output() completeTaskEvent = new EventEmitter<string>();


  //method
  completeTask()
  {
    this.completeTaskEvent.emit(this.selectedTasks.id);
  }

}
