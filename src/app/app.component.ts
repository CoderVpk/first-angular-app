import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './task/task.component';
import{ DUMMY_USERS } from './dummy-users';
import { User } from './user.model';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HeaderComponent, UserComponent, TaskComponent, CommonModule]
})
export class AppComponent {
  title = 'first-angular-app';
  users = DUMMY_USERS;

  userSelected=signal<User|undefined>(undefined);

  selectedUser(user: User){
    this.userSelected.set(user);
  }
}
