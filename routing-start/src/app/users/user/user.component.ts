import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: { id: number, name: string };

  constructor(private userService: UsersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id: number = +this.route.snapshot.params['id'];
    const name: string = this.userService.gerUserName(id);
    this.user = {
      id: id,
      name: name
    };
    // Es necesario suscribirse si el componente va a cambiar una vez renderizado.
    // Por ejemplo, algún botón que actualice un string o algo por el estilo.
    // Con el snapshot solo inicializamos cuando el componente se carga,
    // si el componente no cambia y hay que cambiar los datos que se muestran,
    // es necesario hacerlo asincrónicamente suscribiéndose al método params.
    this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = this.userService.gerUserName(+params['id']);
      }
    );
  }
}
