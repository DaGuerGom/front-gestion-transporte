import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionesRutaComponent } from './asignaciones-ruta.component';

describe('AsignacionesRutaComponent', () => {
  let component: AsignacionesRutaComponent;
  let fixture: ComponentFixture<AsignacionesRutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignacionesRutaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignacionesRutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
