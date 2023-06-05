import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAutobusComponent } from './editar-autobus.component';

describe('EditarAutobusComponent', () => {
  let component: EditarAutobusComponent;
  let fixture: ComponentFixture<EditarAutobusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAutobusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarAutobusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
