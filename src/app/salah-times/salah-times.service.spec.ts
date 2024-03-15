import { TestBed } from '@angular/core/testing';

import { SalahTimesService } from './salah-times.service';

describe('SalahTimesService', () => {
  let service: SalahTimesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalahTimesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
