import { TestBed, inject } from '@angular/core/testing';

import { DevxNglibService } from './devx-nglib.service';

describe('DevxNglibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DevxNglibService]
    });
  });

  it('should be created', inject([DevxNglibService], (service: DevxNglibService) => {
    expect(service).toBeTruthy();
  }));
});
