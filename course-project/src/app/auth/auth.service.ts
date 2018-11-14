import * as firebase from 'firebase'
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

  token: string;

  constructor(private  router: Router) {}

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      );
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken() // Este método asíncrono porque va a firebase a chequear si el token no expìró.
          .then(
            (token: string) => this.token = token // Guardar el token una vez recibido.
          );
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;  // Retorna el token ya almacenado, no se queda esperando la promesa anterior.
                        // (Corres el riesgo de que el token haya expirado.
  }

  isAuthenticated() {
    return this.token != null;
  }

}
