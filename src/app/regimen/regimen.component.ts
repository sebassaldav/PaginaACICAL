import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ContentfulService } from '../services/contentful.service';

@Component({
  selector: 'app-regimen',
  templateUrl: './regimen.component.html',
  styleUrls: ['./regimen.component.css']
})
export class RegimenComponent implements OnInit {

  constructor(private contentfulService: ContentfulService) { }

  regimenTributarioPost$ : Observable <any> | undefined;

  ngOnInit(): void {
    this.regimenTributarioPost$ = this.contentfulService.getRegimenContent();
  }


}
