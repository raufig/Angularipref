import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCartasComponent } from './home-cartas.component';

describe('HomeCartasComponent', () => {
  let component: HomeCartasComponent;
  let fixture: ComponentFixture<HomeCartasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCartasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCartasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
