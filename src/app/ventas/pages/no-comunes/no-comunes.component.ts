import { Component } from '@angular/core';
import { interval } from 'rxjs';
 

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent   {

  //i18nSelect
  nombre: string = 'Fernando';
  genero: string = 'masculino';

  invitacionMapa ={
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }

  i:boolean =true;
  cambiarPersona(){
    this.i = !this.i;
    if(this.i == true){
      this.nombre = 'Fernando'
      this.genero = 'masculino'
    }else{
      this.nombre= 'Susana'
      this.genero = 'femenino'
    }
    console.log('Cambiar persona ',this.i);
  }
 
  //i18nPlural
  clientes:string []=['maria','fern','johny','ariel','adrian'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other':'tenemos # clientes esperando.'
  }

  eliminarPersona(){

    if(this.clientes.length != 0){
      this.clientes.pop();
    }else{
      return;
    }
    console.log('eliminar ',this.clientes.length);
  }


  //KeyValue PIPE
  persona = {
    nombre: 'Ariel',
    edad: 23,
    direccion: 'Santa Elena, Ecuador'
  }

  heroes = [
    {
      nombre:'Superman',
      vuela:true
    },
    {
      nombre:'Robin',
      vuela:false
    },
    {
      nombre:'Aquaman',
      vuela:false
    }
  ]

  //ASYNC PIPE  
  miObservable = interval(1000); // 0,1,2,3,4,5,7 durara 
  constructor(){
    this.miObservable.subscribe(resp=>{
      console.log(resp);
    })
  }

  valorPromesa = new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve('tenemos data de promesa')
    }, 3500)
  })
}
