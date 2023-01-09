import { TestBed } from '@angular/core/testing';

import { WiremockService } from './wiremock.service';

describe('WiremockService', () => {
  let service: WiremockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WiremockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
