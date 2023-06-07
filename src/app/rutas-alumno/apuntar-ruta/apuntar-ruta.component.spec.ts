import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApuntarRutaComponent } from './apuntar-ruta.component';

describe('ApuntarRutaComponent', () => {
  let component: ApuntarRutaComponent;
  let fixture: ComponentFixture<ApuntarRutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApuntarRutaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApuntarRutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
