import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutasConductorComponent } from './rutas-conductor.component';

describe('RutasConductorComponent', () => {
  let component: RutasConductorComponent;
  let fixture: ComponentFixture<RutasConductorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutasConductorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutasConductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
