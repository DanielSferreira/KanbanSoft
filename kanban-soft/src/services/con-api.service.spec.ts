import { TestBed } from '@angular/core/testing';

import { ConApiService } from './con-api.service';

describe('ConApiService', () => {
  let service: ConApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
