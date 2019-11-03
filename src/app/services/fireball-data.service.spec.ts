import { TestBed } from '@angular/core/testing';

import { FireballDataService } from './fireball-data.service';

describe('FireballDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FireballDataService = TestBed.get(FireballDataService);
    expect(service).toBeTruthy();
  });
});
