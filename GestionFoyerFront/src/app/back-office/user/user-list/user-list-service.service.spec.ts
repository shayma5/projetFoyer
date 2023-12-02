import { TestBed } from '@angular/core/testing';

import { UserListServiceService } from './user-list-service.service';

describe('UserListServiceService', () => {
  let service: UserListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
