import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  // ActivateRoute contiene la ruta en la que estamos actualmente.
  constructor(private serversService: ServersService,
              private router: Router,
              private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  getServers() {
    return this.servers;
  }

  onReload() {
    // A diferencia del RouterLink, el método navigate no conoce el path en el que estás parado.
    // Lo que se le pasa es un path absoluto a menos que le enviemos como segundo argumento a que path será relativo.
    // Por defecto siempre será relativo a la raíz ('/').
    // this.router.navigate(['servers'], {relativeTo: this.route});
    this.router.navigate(['/servers']);
  }

}
