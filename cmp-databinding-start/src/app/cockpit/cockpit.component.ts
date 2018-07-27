import { element } from 'protractor';
import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: String }>();
  @Output() bluePrintCreated = new EventEmitter<{ serverName: string, serverContent: String }>();
  // newServerContent = '';
  // Tener cuidado con cambiar el valor del elemento referenciado, no es recomentable acceder al DOM de esta manera.
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  // Se ejecuta luego del contructor.
  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({ serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.bluePrintCreated.emit({ serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value });
  }
}
