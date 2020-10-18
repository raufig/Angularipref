import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTendenciaComponent } from './card-tendencia.component';

describe('CardTendenciaComponent', () => {
  let component: CardTendenciaComponent;
  let fixture: ComponentFixture<CardTendenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTendenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTendenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
