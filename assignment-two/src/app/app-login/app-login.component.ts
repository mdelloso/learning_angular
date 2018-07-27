import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class LoginComponent {

  username: String = '';
  balnkUserName: String = '';

  onResetUsername() {
    this.username = '';
  }
}
