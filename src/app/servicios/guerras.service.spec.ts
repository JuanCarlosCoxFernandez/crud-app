import { TestBed } from '@angular/core/testing';

import { GuerrasService } from './guerras.service';

describe('GuerrasService', () => {
  let service: GuerrasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuerrasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
