import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ContentfulService } from '../services/contentful.service';

@Component({
  selector: 'app-convocatoria-especifica',
  templateUrl: './convocatoria-especifica.component.html',
  styleUrls: ['./convocatoria-especifica.component.scss']
})
export class ConvocatoriaEspecificaComponent implements OnInit {

  constructor(private route: ActivatedRoute, private contentfulService: ContentfulService) { }

  convocatoriaEspecificaPost$: Observable <any> | undefined;

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        const id = params['id'];
        this.convocatoriaEspecificaPost$ = this.contentfulService.getEntryById(id);
      }
    )
  }
}
