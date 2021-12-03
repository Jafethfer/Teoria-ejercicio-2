import { TestBed } from '@angular/core/testing';

import { RiesgoCardiacoService } from './riesgo-cardiaco.service';

describe('RiesgoCardiacoService', () => {
  let service: RiesgoCardiacoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RiesgoCardiacoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
