import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCuentaUserComponent } from './info-cuenta-user.component';

describe('InfoCuentaUserComponent', () => {
  let component: InfoCuentaUserComponent;
  let fixture: ComponentFixture<InfoCuentaUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCuentaUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCuentaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
