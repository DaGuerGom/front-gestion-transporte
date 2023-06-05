import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaParadaComponent } from './nueva-parada.component';

describe('NuevaParadaComponent', () => {
  let component: NuevaParadaComponent;
  let fixture: ComponentFixture<NuevaParadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaParadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaParadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
