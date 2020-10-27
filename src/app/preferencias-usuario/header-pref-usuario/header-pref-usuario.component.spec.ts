import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPrefUsuarioComponent } from './header-pref-usuario.component';

describe('HeaderPrefUsuarioComponent', () => {
  let component: HeaderPrefUsuarioComponent;
  let fixture: ComponentFixture<HeaderPrefUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPrefUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPrefUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
