import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from '../services/contentful.service';

@Component({
  selector: 'app-institucional',
  templateUrl: './institucional.component.html',
  styleUrls: ['./institucional.component.css']
})
export class InstitucionalComponent implements OnInit {

  constructor(private contentfulService: ContentfulService) { }

  misionVisionPost$ : Observable <any> | undefined;

  ngOnInit(): void {
    this.misionVisionPost$ = this.contentfulService.getMisionVisionContent();
  }




}
