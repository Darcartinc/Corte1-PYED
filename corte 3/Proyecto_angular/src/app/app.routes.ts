
import { RouterModule, Routes } from '@angular/router';

import {
AdoptarComponent,
DonacionesComponent,
FormularioComponent,
InicioComponent,
PerdidosComponent


} from "./components/index.paginas";

 const app_routes: Routes = [
     { path: '', component: InicioComponent },
     { path: 'Adopciones', component: AdoptarComponent },
     { path: 'Donaciones', component: DonacionesComponent },
     { path: 'Formulario', component: FormularioComponent },
     { path: 'Perdidos', component: PerdidosComponent },

     { path: '**', pathMatch: 'full', redirectTo: '' } 
    ]; 

export const app_routing = RouterModule.forRoot(app_routes); 