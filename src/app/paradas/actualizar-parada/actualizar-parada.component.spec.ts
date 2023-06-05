import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarParadaComponent } from './actualizar-parada.component';

describe('ActualizarParadaComponent', () => {
  let component: ActualizarParadaComponent;
  let fixture: ComponentFixture<ActualizarParadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarParadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarParadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
