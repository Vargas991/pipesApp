import { Component } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect

  nombre: string = 'Andrea';
  genero: string = 'femenino';
  selectMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }


  // i18nPlural

  clientes: string[] =['maria','juan','juancho','Edderson','Andrea'];

  clientesMap ={
    '=0': 'No tenemos ninguna cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    // El singo # me trae el valor de clientes que tiene el arreglo clientes
    'other': 'tenemos # clientes esperando'

  }

  cambiarNombre(){
    if(this.genero==='femenino'){
        this.genero = 'masculino';
        this.nombre = 'Edderson';
    }else{
      this.genero = 'femenino';
      this.nombre = 'Andrea';
    }
  }

  borrarCliente(){
    this.clientes.pop();
  }

  // KeyValue Pipe

  persona={
    nombre: 'Edderson',
    direccion: 'San Antonio',
    edad: '30'
  }


  // Json Pipe

  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Batman',
      vuela: false
    },
    {
      nombre: 'Flash',
      vuela: false
    }
  ]

  //Async Pipe

  miObservable = interval(1000);

  miPromesa = new Promise( (resolve, reject)=>{

    setTimeout( ()=>{ 
      resolve('Tenemos Data de Promesa');
    },3500);
  });
}
