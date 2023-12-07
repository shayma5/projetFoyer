import { TestBed } from '@angular/core/testing';

import { BlocServiceService } from './bloc-service.service';

describe('BlocServiceService', () => {
  let service: BlocServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlocServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
