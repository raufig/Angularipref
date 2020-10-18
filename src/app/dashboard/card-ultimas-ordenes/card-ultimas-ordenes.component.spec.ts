import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUltimasOrdenesComponent } from './card-ultimas-ordenes.component';

describe('CardUltimasOrdenesComponent', () => {
  let component: CardUltimasOrdenesComponent;
  let fixture: ComponentFixture<CardUltimasOrdenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardUltimasOrdenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardUltimasOrdenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
