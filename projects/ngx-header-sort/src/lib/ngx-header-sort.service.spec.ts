import { TestBed } from '@angular/core/testing';

import { NgxHeaderSortService } from './ngx-header-sort.service';

describe('NgxHeaderSortService', () => {
  let service: NgxHeaderSortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxHeaderSortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
