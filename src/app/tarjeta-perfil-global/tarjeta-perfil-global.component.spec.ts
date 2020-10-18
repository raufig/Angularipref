import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaPerfilGlobalComponent } from './tarjeta-perfil-global.component';

describe('TarjetaPerfilGlobalComponent', () => {
  let component: TarjetaPerfilGlobalComponent;
  let fixture: ComponentFixture<TarjetaPerfilGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaPerfilGlobalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaPerfilGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
