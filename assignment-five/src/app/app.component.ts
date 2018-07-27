import { CounterService } from './services/counter.service';
import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  testCounter = 0;

  constructor(public usersService: UsersService, public counterService: CounterService) {
    this.usersService.testEvent.subscribe(
      () => {
        this.testCounter++;
        console.log('Test event works! ' + this.testCounter);
      }
    );
  }


}
