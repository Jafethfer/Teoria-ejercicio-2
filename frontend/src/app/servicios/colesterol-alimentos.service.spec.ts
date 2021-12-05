import { TestBed } from '@angular/core/testing';

import { ColesterolAlimentosService } from './colesterol-alimentos.service';

describe('ColesterolAlimentosService', () => {
  let service: ColesterolAlimentosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColesterolAlimentosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
