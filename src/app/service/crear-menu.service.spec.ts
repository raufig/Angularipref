import { TestBed } from '@angular/core/testing';

import { CrearMenuService } from './crear-menu.service';

describe('CrearMenuService', () => {
  let service: CrearMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
