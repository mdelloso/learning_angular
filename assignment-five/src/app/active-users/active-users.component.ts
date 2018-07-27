import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  activeUsers = [];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.activeUsers = this.usersService.activeUsers;
  }

  setToInactive(id: number) {
    this.usersService.setToInactive(id);
  }
}
