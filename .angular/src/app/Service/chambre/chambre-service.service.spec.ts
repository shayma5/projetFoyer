import { TestBed } from '@angular/core/testing';

import { ChambreServiceService } from './chambre-service.service';

describe('ChambreServiceService', () => {
  let service: ChambreServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChambreServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
