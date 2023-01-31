import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  constructor() { }

  private client = createClient({
    space: environment.spaceID,
    accessToken: environment.accessToken
  });

  getBlogPostContent(){
    const promise = this.client.getEntry('2XT5Yo9YgFGz6piTA8Znzw')
    return from(promise);
  }

  getMisionVisionContent()
  {
    const promise = this.client.getEntries({content_type: 'misionVision'})
    return from(promise);
  }

  getRegimenContent()
  {
    const promise = this.client.getEntries({content_type: 'regimenTributario'})
    return from(promise);
  }

  getConvocatoriasContent()
  {
    const promise = this.client.getEntries({content_type: 'convocatorias'})
    return from(promise);
  }

  getActividadesContent()
  {
    const promise = this.client.getEntries({content_type: 'actividades'})
    return from(promise);
  }

  getEntryById(id: string)
  {
    const promise = this.client.getEntry(id)
    return from(promise);
  }
}
