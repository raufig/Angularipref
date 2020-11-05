import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioMesasComponent } from './formulario-mesas.component';

describe('FormularioMesasComponent', () => {
  let component: FormularioMesasComponent;
  let fixture: ComponentFixture<FormularioMesasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioMesasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioMesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
