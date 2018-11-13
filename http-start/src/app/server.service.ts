import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import { throwError } from 'rxjs';
import {map, catchError} from 'rxjs/operators';

@Injectable() // Es necesario para que este servicio pueda utilizar otros servicios (en este caso el HttpService).

export class ServerService {

  constructor(private http: Http) {
  }

  getServers() {
    return this.http.get('https://udemy-http-test-9ff2e.firebaseio.com/data.json').pipe(
      map( // El operador map, toma el dato y lo wrapea en un nuevo observable. En este caso, data será wrapeado en un observable.
        (response: Response) => {
          const data = response.json(); // el método json parsea el json a un objecto JavaScript.
          // Es posible hacerle algún cambio a los datos antes de devolverlos. Por ejemplo:
          /*
          for (const server of data) {
            server.name = 'FETCHED_' + server.name;
          }
           */
          return data;
        }
      )
    );
  }

  storeServers(servers: any[]) {

    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    /* Los métodos (como post) crean observables, si ese observable no se le asigna a una variable
    (tal como está abajo, sólo se está retornando) El request no se va a enviar (para qué va a mandar un request si
     nadie está esperando una respuesta?) */
    // El POST hace un append del dato (en firebase).
    // return this.http.post('https://udemy-http-test-9ff2e.firebaseio.com/data.json', servers, {headers: headers});
    // No es necesario pasar el header acá porque ya está por defecto.
    // El PUT sobreescribe el dato (en firebase)
    return this.http.put('https://udemy-http-test-9ff2e.firebaseio.com/data.json', servers, {headers: headers});
  }

  getAppName() {
    return this.http.get('https://udemy-http-test-9ff2e.firebaseio.com/appName.json').pipe(
      map(
        (response: Response) => {
          return response.json();
        }
      ),
      catchError( // El operador catch, a diferencia de map, no wrapea la respuesta en un observable. Hay que hacerlo a mano.
        (error: Response) => {
          return throwError('Something went wrong :(');
        }
      )
    );
  }

}
