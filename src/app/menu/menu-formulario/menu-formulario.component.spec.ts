import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFormularioComponent } from './menu-formulario.component';

describe('MenuFormularioComponent', () => {
  let component: MenuFormularioComponent;
  let fixture: ComponentFixture<MenuFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
