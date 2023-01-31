import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActividadEspecificaComponent } from './actividad-especifica/actividad-especifica.component';
import { ConvocatoriaEspecificaComponent } from './convocatoria-especifica/convocatoria-especifica.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'convocatoria/:id',
    component: ConvocatoriaEspecificaComponent
  },
  {
    path:'actividades/:id',
    component: ActividadEspecificaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
