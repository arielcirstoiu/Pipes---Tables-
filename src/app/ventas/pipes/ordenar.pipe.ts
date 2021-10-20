import { Pipe, PipeTransform } from '@angular/core';
import { Heroes } from '../interfaces/ventas.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(value: Heroes[], orderPor: string = ''): Heroes[] {
// console.log(orderPor);
    // if(orderPor == ''){
    //   return value;
    // }else if(orderPor == 'nombre'){
    //   value = value.sort( (a,b) => (a.nombre > b.nombre) ? 1 : -1);
    // }else if(orderPor == 'color'){
    //   value = value.sort( (a,b) => (a.color > b.color) ? 1 : -1);
    // }else if(orderPor == 'vuela'){
    //   value = value.sort( (a,b) => (a.vuela < b.vuela) ? 1 : -1);
    // }

    switch(orderPor){
      case 'nombre':
         return value = value.sort( (a,b) => (a.nombre > b.nombre) ? 1 : -1);
      case 'vuela':
          return  value = value.sort( (a,b) => (a.vuela > b.vuela) ? -1 : 1);
      case 'color':
          return value = value.sort( (a,b) => (a.color > b.color) ? 1 : -1);
      default:
        return value;
    }

 
  }



}
