import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusFormulariosComponent } from './menus-formularios.component';

describe('MenusFormulariosComponent', () => {
  let component: MenusFormulariosComponent;
  let fixture: ComponentFixture<MenusFormulariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenusFormulariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenusFormulariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
