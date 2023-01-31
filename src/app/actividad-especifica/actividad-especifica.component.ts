import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfulService } from '../services/contentful.service';

@Component({
  selector: 'app-actividad-especifica',
  templateUrl: './actividad-especifica.component.html',
  styleUrls: ['./actividad-especifica.component.scss']
})
export class ActividadEspecificaComponent implements OnInit {

  constructor(private route: ActivatedRoute, private contentfulService: ContentfulService) { }

  actividadEspecificaPost$: Observable <any> | undefined;

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        const id = params['id'];
        this.actividadEspecificaPost$ = this.contentfulService.getEntryById(id);
      }
    )
  }

}
