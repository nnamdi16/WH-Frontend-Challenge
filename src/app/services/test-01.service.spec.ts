import { TestBed } from '@angular/core/testing';

import { Test01Service } from './test-01.service';

describe('Test01Service', () => {
  let service: Test01Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Test01Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
