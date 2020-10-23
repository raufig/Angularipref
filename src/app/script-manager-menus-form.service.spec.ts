import { TestBed } from '@angular/core/testing';

import { ScriptManagerMenusFormService } from './script-manager-menus-form.service';

describe('ScriptManagerMenusFormService', () => {
  let service: ScriptManagerMenusFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScriptManagerMenusFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
