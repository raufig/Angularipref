import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaEstadoComponent } from './tarjeta-estado.component';

describe('TarjetaEstadoComponent', () => {
  let component: TarjetaEstadoComponent;
  let fixture: ComponentFixture<TarjetaEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaEstadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
