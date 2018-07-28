import { TestBed, inject } from '@angular/core/testing';

import { TripDataService } from './trip-data-service.service';

describe('TripDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TripDataService]
    });
  });

  it('should be created', inject([TripDataService], (service: TripDataService) => {
    expect(service).toBeTruthy();
  }));
});
