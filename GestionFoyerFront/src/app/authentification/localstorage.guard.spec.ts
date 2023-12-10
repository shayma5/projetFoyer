import { TestBed } from '@angular/core/testing';

import { LocalstorageGuard } from './localstorage.guard';

describe('LocalstorageGuard', () => {
  let guard: LocalstorageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LocalstorageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
