import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//Modulo personalizado
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';
import { AppRouterModule } from './app-router.module';

//Cambiar el locale de la app
import localeEsEc  from "@angular/common/locales/es-EC";
import { registerLocaleData } from '@angular/common'

import localeFR  from "@angular/common/locales/fr";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //PARA ANIMACIONES

registerLocaleData(localeEsEc);
registerLocaleData(localeFR);
@NgModule({
  declarations: [
    AppComponent
  ], 
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    PrimeNgModule,
    VentasModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-EC'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
