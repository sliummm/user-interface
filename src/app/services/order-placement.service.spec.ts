import { TestBed } from '@angular/core/testing';

import { OrderPlacementService } from './order-placement.service';

describe('OrderPlacementService', () => {
  let service: OrderPlacementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderPlacementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
