import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() gameStarted = new EventEmitter<number>();
  @Output() gameStoped = new EventEmitter();

  timer;
  n = 0;

  constructor() {
  }

  ngOnInit() {
  }

  OnStartGame() {
    this.n = 0;
    this.timer = setInterval(() => {
      this.gameStarted.emit(this.n++);
    }, 1000);
  }

  OnStopGame() {
    clearInterval(this.timer);
    this.gameStoped.emit();
  }

}
