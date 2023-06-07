import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutasAlumnoComponent } from './rutas-alumno.component';

describe('RutasAlumnoComponent', () => {
  let component: RutasAlumnoComponent;
  let fixture: ComponentFixture<RutasAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutasAlumnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutasAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
