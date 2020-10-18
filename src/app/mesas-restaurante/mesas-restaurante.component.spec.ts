import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesasRestauranteComponent } from './mesas-restaurante.component';

describe('MesasRestauranteComponent', () => {
  let component: MesasRestauranteComponent;
  let fixture: ComponentFixture<MesasRestauranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesasRestauranteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesasRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
