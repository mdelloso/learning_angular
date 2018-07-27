import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttonClicked = false;
  numberOfClicks = 0;
  logs = [];

  onToggleDetails() {
    this.buttonClicked = !this.buttonClicked;
    // this.logs.push(++this.numberOfClicks);
    this.logs.push(new Date());
  }


}
