import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from '../services/contentful.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.scss']
})
export class ActividadesComponent implements OnInit {

  constructor(private contentfulService: ContentfulService) {
  }

  actividadesPost$ : Observable <any> | undefined;


  ngOnInit(): void {
    this.actividadesPost$ = this.contentfulService.getActividadesContent();
  }

}
