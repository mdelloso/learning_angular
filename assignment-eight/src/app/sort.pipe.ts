import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false // WARNING! ver en el apartado de pipes.
})
export class SortPipe implements PipeTransform {

  transform(value: any, propName: string): any {
    return value.sort((a, b) => {
      if (a[propName] > b[propName]) {
        return 1; // Indica que a es mayor y la función de comparación ordenará b - a.
      } else {
        return -1; // Indica que b es mayor y la función de comparación ordenará a - b.
      }
    });
  }

}
