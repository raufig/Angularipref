import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexIprefComponent } from './index-ipref.component';

describe('IndexIprefComponent', () => {
  let component: IndexIprefComponent;
  let fixture: ComponentFixture<IndexIprefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexIprefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexIprefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
