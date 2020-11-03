import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugerenciasPrefUsuarioComponent } from './sugerencias-pref-usuario.component';

describe('SugerenciasPrefUsuarioComponent', () => {
  let component: SugerenciasPrefUsuarioComponent;
  let fixture: ComponentFixture<SugerenciasPrefUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SugerenciasPrefUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SugerenciasPrefUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
