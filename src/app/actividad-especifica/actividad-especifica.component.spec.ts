import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadEspecificaComponent } from './actividad-especifica.component';

describe('ActividadEspecificaComponent', () => {
  let component: ActividadEspecificaComponent;
  let fixture: ComponentFixture<ActividadEspecificaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActividadEspecificaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActividadEspecificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
