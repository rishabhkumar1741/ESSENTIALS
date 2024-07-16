import {Component, EventEmitter, Input, Output, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {TasksService} from "../tasks.service";


@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  title:string="";
  summary:string="";
  duedate:string="";
  @Output() cancel = new EventEmitter<void>();
  @Input() selectedUserId:string="";


  //Constructer
  private tasksService:TasksService;
  constructor(tasksService:TasksService) {
    this.tasksService = tasksService;
  }

  cancelTaskButton()
  {
    this.cancel.emit();
  }
  onSubmit()
  {
    const newTaskData= {title: this.title,summary: this.summary,duedate:this.duedate};
    this.tasksService.addTask(newTaskData,this.selectedUserId);
    this.cancel.emit();

  }

}
