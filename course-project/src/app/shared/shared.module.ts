import {NgModule} from '@angular/core';
import {DropdownDirective} from './dropdown.directive';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    DropdownDirective // Esta la declaración de la directiva (se hace 1 sola vez.)
  ],
  exports: [
    CommonModule,  // Es el que contiene las directivas *ngClass *ngFor *ngIf etc.
                   // En el AppModule no está porque está contenido en el BrowserModule.
                   // No es necesario importar un módulo para exportarlo.
    DropdownDirective // Exportarla permite que esté disponible para los demás módulos.
  ]
})
export class SharedModule {
}
