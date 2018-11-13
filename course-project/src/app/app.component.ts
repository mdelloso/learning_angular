import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBEisewaPuis1xmNZn6KFcuxOJpY8rUYIE',
      authDomain: 'ng-recipe-book-5d809.firebaseapp.com'
    });
  }
}
