import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSugerenciaPrefUComponent } from './header-sugerencia-pref-u.component';

describe('HeaderSugerenciaPrefUComponent', () => {
  let component: HeaderSugerenciaPrefUComponent;
  let fixture: ComponentFixture<HeaderSugerenciaPrefUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSugerenciaPrefUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSugerenciaPrefUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
