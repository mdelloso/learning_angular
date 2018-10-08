import {Component} from '@angular/core';
import {ServerService} from './server.service';
import {Response} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = this.serverService.getAppName();
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];

  constructor(private serverService: ServerService) {
  }

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }

  onStoreServers() {
    /* Ahora sí, al suscribirse al observable el request se va a enviar */
    /* No es necesario desuscribirse de este observable ya que angular lo va a limpiar cuando llegue la respuesta */
    this.serverService.storeServers(this.servers).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  onGetServers() {
    this.serverService.getServers().subscribe(
      (servers: any[]) => this.servers = servers,
      (error) => console.log(error)
    );
  }
}
