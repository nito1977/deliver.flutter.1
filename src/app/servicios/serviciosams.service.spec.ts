import { TestBed } from '@angular/core/testing';

import { ServiciosamsService } from './serviciosams.service';

describe('ServiciosamsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiciosamsService = TestBed.get(ServiciosamsService);
    expect(service).toBeTruthy();
  });
});
