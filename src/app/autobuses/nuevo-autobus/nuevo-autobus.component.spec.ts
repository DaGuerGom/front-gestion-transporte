import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoAutobusComponent } from './nuevo-autobus.component';

describe('NuevoAutobusComponent', () => {
  let component: NuevoAutobusComponent;
  let fixture: ComponentFixture<NuevoAutobusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoAutobusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoAutobusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
