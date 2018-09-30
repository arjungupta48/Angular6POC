import { TestBed } from '@angular/core/testing';

import { DistributionService } from './distribution.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('DistributionService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [HttpClient, HttpHandler]
  }));

  it('should be created', () => {
    const service: DistributionService = TestBed.get(DistributionService);
    expect(service).toBeTruthy();
  });
});
