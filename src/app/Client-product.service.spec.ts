import { TestBed } from '@angular/core/testing';

import { ClientProductService } from './Client-product.service';

describe('ClientProductService ', () => {
  let service: ClientProductService ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientProductService );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});