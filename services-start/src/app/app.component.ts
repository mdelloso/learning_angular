import { AccountsService } from './services/accounts.service';
import { Component, OnInit } from '@angular/core';

/*
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService]
})
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  accounts: { name: string, status: string }[] = [];

  /*
    Normalmente se utiliza el constructor sólo para inicializar las "Dependecy Injection" como por ejemplo inyectar servicios en las clases.
    Para inicializar los datos se suele utilizar ngOnInit.
    Además, los valores pasados con @Input(), no son inicializados en el constructor sino en el ngOnInit(),
    por ello hay casos en que utilizar el constructor es demasiado temprano.
  */
  /*
    Si el 'Selector' del componente A está incluído en el template del componente B, el componente A es hijo del componente B.
  */
  /*
    Las instancias de los servicios se comparten con los hijos hacia abajo, nunca hacia arriba. Si un hijo declara el servicio de un padre,
    se crea una nueva instancia del servicio y se sobreescribe la del padre.
    Para que un hijo herede un servicio (misma instancia), no debemos ponerlo en el providers (si lo hacemos se creará una nueva instancia).
    Aunque sí debemos ponerlo en el constructor porque es la forma de crear la referencia local.
  */

  constructor(private accountsService: AccountsService) { }

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }
}
