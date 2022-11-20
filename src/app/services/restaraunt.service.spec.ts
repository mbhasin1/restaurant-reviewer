import { TestBed } from '@angular/core/testing';

import { RestarauntService } from './restaraunt.service';

describe('RestarauntService', () => {
  let service: RestarauntService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestarauntService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
