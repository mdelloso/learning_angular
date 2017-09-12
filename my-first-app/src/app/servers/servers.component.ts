import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
  
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  severName: string = 'Test';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);  
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }

  onUpdateServerName(event: Event) {
    /* If you don't use <HTMLInputElement>, typescript will not know the 'value' property.
        You have to inform it explicitly. */
    this.severName = (<HTMLInputElement>event.target).value;
  }

}
