import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PerdidosComponent } from './components/perdidos/perdidos.component';
import { AdoptarComponent } from './components/adoptar/adoptar.component';
import { DonacionesComponent } from './components/donaciones/donaciones.component';
import { FormularioComponent } from './components/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    PerdidosComponent,
    AdoptarComponent,
    DonacionesComponent,
    FormularioComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
