import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaOrdenComponent } from './tarjeta-orden.component';

describe('TarjetaOrdenComponent', () => {
  let component: TarjetaOrdenComponent;
  let fixture: ComponentFixture<TarjetaOrdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaOrdenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
