import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import {FieldsetModule  } from "primeng/fieldset";
import {MenubarModule} from 'primeng/menubar';
import { ToolbarModule } from "primeng/toolbar";
import { TableModule } from "primeng/table";

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    ToolbarModule,
    TableModule,
    FieldsetModule
  ]
})
export class PrimeNgModule { }
