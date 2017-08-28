/* import Component so it can be used here */
import { Component } from '@angular/core';

/* Use the Component decorator to tell Angular that this clas will be a component and not a regular TypeScript class */
@Component({
    /* HTML tag, must be unique */
    selector: 'app-server',
    templateUrl: './server.component.html'
})

/* Export the class so it can be used outside of this file too */
export class ServerComponent {

}