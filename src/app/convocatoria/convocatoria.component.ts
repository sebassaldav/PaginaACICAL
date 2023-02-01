import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { ContentfulService } from '../services/contentful.service';

@Component({
  selector: 'app-convocatoria',
  templateUrl: './convocatoria.component.html',
  styleUrls: ['./convocatoria.component.scss']
})
export class ConvocatoriaComponent implements OnInit {

  constructor(private modalService: NgbModal, private contentfulService: ContentfulService) {
  }

  convocatoriaPost$ : Observable <any> | undefined;
  actividadesPost$ : Observable <any> | undefined;

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  ngOnInit(): void {
    this.convocatoriaPost$ = this.contentfulService.getConvocatoriasContent();
    this.actividadesPost$ = this.contentfulService.getActividadesContent();
  }
}
