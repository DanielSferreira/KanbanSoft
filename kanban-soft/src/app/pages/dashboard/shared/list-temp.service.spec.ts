import { TestBed } from '@angular/core/testing';

import { ListTempService } from './list-temp.service';

describe('ListTempService', () => {
  let service: ListTempService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListTempService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
