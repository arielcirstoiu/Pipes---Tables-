import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
 
  ]
})
export class BasicosComponent   {

   nombreLower: string = 'ariel';
   nombreUpper: string = 'ARIEL';
   nombreCompleto: string = 'AriEl CirStoiU';

   fecha: Date = new Date();
}
