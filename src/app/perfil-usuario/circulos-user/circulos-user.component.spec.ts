import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirculosUserComponent } from './circulos-user.component';

describe('CirculosUserComponent', () => {
  let component: CirculosUserComponent;
  let fixture: ComponentFixture<CirculosUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CirculosUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CirculosUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
