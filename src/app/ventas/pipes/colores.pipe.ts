

import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name: 'colores'
})

export class ColoresPipe implements PipeTransform {
   
   
    transform(value: number):string {
        if(value === 0)
           return 'azul';
        if(value === 1 )
           return 'negro';
        if(value === 2)
           return 'rojo';
        if(value === 3)
           return 'verde';
            
           return '';
    }

}