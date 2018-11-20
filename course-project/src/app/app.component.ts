import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService) {}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBEisewaPuis1xmNZn6KFcuxOJpY8rUYIE',
      authDomain: 'ng-recipe-book-5d809.firebaseapp.com'
    });
    this.authService.loadUser();
  }
}
