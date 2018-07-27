/* import Component so it can be used here */
import { Component } from '@angular/core';

/* Use the Component decorator to tell Angular that this class will be a component and not a regular TypeScript class */
@Component({
    /* HTML tag, must be unique */
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})

/* Export the class so it can be used outside of this file too */
export class ServerComponent {
    serverId = 10;
    serverStatus = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}
