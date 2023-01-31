import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CarouselComponent } from './carousel/carousel.component';
import { InstitucionalComponent } from './institucional/institucional.component';
import { RegimenComponent } from './regimen/regimen.component';
import { ConvocatoriaComponent } from './convocatoria/convocatoria.component';
import { ConvocatoriaEspecificaComponent } from './convocatoria-especifica/convocatoria-especifica.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { ActividadEspecificaComponent } from './actividad-especifica/actividad-especifica.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactoComponent,
    CarouselComponent,
    InstitucionalComponent,
    RegimenComponent,
    ConvocatoriaComponent,
    ConvocatoriaEspecificaComponent,
    ActividadesComponent,
    ActividadEspecificaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
