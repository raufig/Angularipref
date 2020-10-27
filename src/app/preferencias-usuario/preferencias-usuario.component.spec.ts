import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferenciasUsuarioComponent } from './preferencias-usuario.component';

describe('PreferenciasUsuarioComponent', () => {
  let component: PreferenciasUsuarioComponent;
  let fixture: ComponentFixture<PreferenciasUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreferenciasUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferenciasUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
