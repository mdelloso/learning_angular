import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false // WARNING!
  /** Los Pipes se ejecutan sóo cuando la entrada cambia (en este caso el valor del textinput)
    * no cuando los datos cambian (en este cado cuando se clickea en 'Add Server'), esto bajaría mucho la performance
    * y consumiría muchos recursos.
    * Al poner la propiedad 'pure' en false, deshabilitamos este comportamiento y los filtro se ejecutarán
    * cada vez que los datos cambien, hay que tener en cuenta el overhead que se genera al modificar esta propiedad. */
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }

    // Con for loop
    const resultArray = [];
    for (const item of value) {
      if (item[propName].toLowerCase() === filterString.toLowerCase()) { // item.status === item['status']
        resultArray.push(item);
      }
    }

    // Filter Array
    /*
    const resultArray = value.filter((item, index) => {
      return item[propName].toLowerCase() === filterString.toLowerCase();
    });
    */

    return resultArray;
  }
}
