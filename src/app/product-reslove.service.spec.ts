import { TestBed } from '@angular/core/testing';

import { ProductResloveService } from './product-reslove.service';

describe('ProductResloveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductResloveService = TestBed.get(ProductResloveService);
    expect(service).toBeTruthy();
  });
});
