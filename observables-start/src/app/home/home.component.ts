import { Observable, Subscribable, Observer, Subscription, interval } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { map } from 'rxjs/Operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numberGeneratorSubscription: Subscription;
  customObservableSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // Map es un operador que se le puede aplicar a los tipos Observables (A TODOS).
    // Los operadores sirven para aplicarle transformaciones a los observables.
    // Como los Operators retornan nuevos Observables, son encadenables.
    const numberGenerator = interval(1000).pipe(map(
      (data: number) => {
        return data * 2;
      }
    ));
    this.numberGeneratorSubscription = numberGenerator.subscribe(
      (number: number) => {
        console.log(number);
      }
    );
    const myObservable = Observable.create(
      (observer: Observer<string>) => {
        setTimeout(() => {
          observer.next('first package'); // Next emite un paquete. Sería como un emit
        }, 2000);
        setTimeout(() => {
          observer.next('second package');
        }, 4000);
        setTimeout(() => {
          // observer.error('this does not work');
          observer.complete(); // Error también termina la ejecución.
        }, 5000);
        setTimeout(() => { // Esto nunca se va a ejecutar porque el observable ya terminó.
          observer.next('third package');
        }, 6000);
      }
    );

    this.customObservableSubscription = myObservable.subscribe(
      (message: string) => {  // El prime parámetro es para los eventos comunes.
        console.log(message);
      },
      (errorMessage: string) => { // El segundo parámetro es para los mensajes de error.
        console.log(errorMessage);
      },
      () => { // El tercer parámetro es para el complete.
        console.log('completed');
      }
    );
  }

  // Es necesario desuscribirse de los observables creados por el usuario.
  // de no hacerlo, la suscrupción quedará activa aunque el usuario cambie de componente y puede
  // provocar fugas de memoria. Los observables creados por Angular se descuscriben automáticamente.
  ngOnDestroy() {
    this.numberGeneratorSubscription.unsubscribe();
    this.customObservableSubscription.unsubscribe();
  }

}
