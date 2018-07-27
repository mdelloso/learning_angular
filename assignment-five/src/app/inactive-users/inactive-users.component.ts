import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  inactiveUsers = [];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.inactiveUsers = this.usersService.inactiveUsers;
  }

  setToActive(id: number) {
    this.usersService.setToActive(id);
  }
}
