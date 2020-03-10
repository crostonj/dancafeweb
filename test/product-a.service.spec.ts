import { TestBed } from '@angular/core/testing';

import { ProductAService } from './product-a.service';

describe('ProductAService', () => {
  let service: ProductAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
