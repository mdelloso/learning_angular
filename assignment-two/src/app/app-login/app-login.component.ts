import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class LoginComponent implements OnInit {

  username: String = ''; 

  constructor() { }

  ngOnInit() {
  }

  onResetUsername() {
    this.username = '';
  }
}
