import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutasAdminComponent } from './rutas-admin.component';

describe('RutasAdminComponent', () => {
  let component: RutasAdminComponent;
  let fixture: ComponentFixture<RutasAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutasAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
