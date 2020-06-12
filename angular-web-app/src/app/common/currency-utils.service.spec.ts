import { TestBed } from '@angular/core/testing';

import { CurrencyUtilsService } from './currency-utils.service';

describe('CurrencyUtilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrencyUtilsService = TestBed.get(CurrencyUtilsService);
    expect(service).toBeTruthy();
  });
});
