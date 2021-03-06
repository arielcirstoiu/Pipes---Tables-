import { Component, OnInit } from '@angular/core';
import { Color, Heroes } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent   {


  ordenarPor: string = '';
 
  bandera:boolean=true;

  change(){
    this.bandera = !this.bandera;
  }

  heroes:Heroes [] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    }
  ]

  cambiarOrden(valor: string){
    this.ordenarPor = valor;
    console.log(valor);
  }

}
