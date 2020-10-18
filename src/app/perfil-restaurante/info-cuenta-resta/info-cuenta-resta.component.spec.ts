import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCuentaRestaComponent } from './info-cuenta-resta.component';

describe('InfoCuentaRestaComponent', () => {
  let component: InfoCuentaRestaComponent;
  let fixture: ComponentFixture<InfoCuentaRestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCuentaRestaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCuentaRestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
