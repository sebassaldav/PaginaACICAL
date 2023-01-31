import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvocatoriaEspecificaComponent } from './convocatoria-especifica.component';

describe('ConvocatoriaEspecificaComponent', () => {
  let component: ConvocatoriaEspecificaComponent;
  let fixture: ComponentFixture<ConvocatoriaEspecificaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvocatoriaEspecificaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvocatoriaEspecificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
