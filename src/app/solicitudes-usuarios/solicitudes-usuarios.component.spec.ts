import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesUsuariosComponent } from './solicitudes-usuarios.component';

describe('SolicitudesUsuariosComponent', () => {
  let component: SolicitudesUsuariosComponent;
  let fixture: ComponentFixture<SolicitudesUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudesUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudesUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
