import {Component, EventEmitter, Input, Output} from '@angular/core';
import {task} from "./task.model";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
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
