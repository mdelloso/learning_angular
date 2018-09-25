import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    return value.split('').reverse().join('');
    /* Reverse es sólo para arreglos (se ve que un string no lo toma como un arreglo de caracteres).
    Con split en blanco genera un vector separado por espacios en blanco y join une los elementos de un array en un string. */
  }

}
