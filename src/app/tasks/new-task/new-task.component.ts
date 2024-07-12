import {Component, EventEmitter, Output,signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {type NewTaskModels} from "./new-task.models"


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
  @Output() add = new EventEmitter<NewTaskModels>()
  cancelTaskButton()
  {
    this.cancel.emit();
  }
  onSubmit()
  {
    this.add.emit({title:this.title, summary:this.summary,duedate:this.duedate});
  }

}
