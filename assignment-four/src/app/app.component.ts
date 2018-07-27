import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onGameStarted(tick: number) {
    if (tick % 2 === 0) {
      this.evenNumbers.push(tick);
    } else {
      this.oddNumbers.push(tick);
    }
  }

  OnGameStoped() {
    console.log('Game Stoped');
    this.evenNumbers.length = 0;
    this.oddNumbers.length = 0;
  }
}
