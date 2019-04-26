import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  // La request entra por el interceptor.
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Auth Intercepted!', req);

    /*
    No se debe nunc modificar la request original por si la request falla y hay que volver a ejecutarla.
    Si la request original se modifica y la request falla, cuando se vuelva a ejecutar el retry, el interceptor modificará
    la request modificada y así sucesivamente. Por ejemplo si estamos haciendo append de un parámetro, la primera request será:
    https://my-example.com?auth=default, pero si falla, el retry será: https://my-example.com?auth=default&auth=default
     */
    const copiedReq = req.clone({
      params: req.params.set('auth', this.authService.getToken())
    }); // Copia la request entrante para poder modificarla (la request entrante es inmutable).

    return next.handle(copiedReq);  // Esto hace que la request siga su curso.
  }

}
