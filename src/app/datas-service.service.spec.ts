import { TestBed } from '@angular/core/testing';

import { DatasServiceService } from './datas-service.service';

describe('DatasServiceService', () => {
  let service: DatasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
