import { Component, Input, input, computed, Output, EventEmitter, output, InputSignal} from '@angular/core';
import {User} from "../user.model"


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  
  @Input({required: true}) user!: User;
  @Output() select=new EventEmitter<User>();

  // @Input({required: true}) name!: string;
  //select = output<User>();

  /*---using signal for input approach*/
  // avatar=input.required<string>();
  // name=input.required<string>();
  // avatarURL=computed(()=>'assets/users/'+this.avatar());

  selected: InputSignal<boolean>=input(false);


  get avatarURL(){
    return 'assets/users/'+this.user.avatar;
  }

  onSelectUser(event: Object){
    this.select.emit(this.user);
  }
}
