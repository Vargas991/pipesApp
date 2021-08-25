import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {
  
  nombreLower: string = 'edderson';
  nombreUpper: string = 'EDDERSON';
  nombreCompleto: string = 'EddERsOn VaRgAs';
  
  fecha: Date = new Date(); // El dia de hoy

}
