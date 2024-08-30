import { TestBed } from '@angular/core/testing';

import { AddfavrestService } from './addfavrest.service';

describe('AddfavrestService', () => {
  let service: AddfavrestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddfavrestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
