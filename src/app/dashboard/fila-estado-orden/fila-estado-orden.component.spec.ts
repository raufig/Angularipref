import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilaEstadoOrdenComponent } from './fila-estado-orden.component';

describe('FilaEstadoOrdenComponent', () => {
  let component: FilaEstadoOrdenComponent;
  let fixture: ComponentFixture<FilaEstadoOrdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilaEstadoOrdenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilaEstadoOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
