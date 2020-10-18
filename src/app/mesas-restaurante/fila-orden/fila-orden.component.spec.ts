import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilaOrdenComponent } from './fila-orden.component';

describe('FilaOrdenComponent', () => {
  let component: FilaOrdenComponent;
  let fixture: ComponentFixture<FilaOrdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilaOrdenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilaOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
