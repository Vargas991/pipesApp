import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';

// Modulos Personlaizados
import { VentasModule } from './ventas/ventas.module';
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';

// Cambiar el local de la app
import  localeES  from "@angular/common/locales/es-VE";
import  localeFr from "@angular/common/locales/fr";
import { registerLocaleData } from "@angular/common";


registerLocaleData(localeES);
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    VentasModule,
    SharedModule
    
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-VE'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
