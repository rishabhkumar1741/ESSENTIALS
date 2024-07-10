import {Component, Input, Output, EventEmitter} from '@angular/core';

import {type User} from "./user.model";




@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // Inputs
  @Input({required:true}) user!:User;
  @Input ({required:true}) selectedUser!:boolean;

  //Output
  @Output() select = new EventEmitter<string>();


  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onselectUser() {
    this.select.emit(this.user.id);
  }
}
