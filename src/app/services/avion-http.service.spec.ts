import { TestBed } from '@angular/core/testing';

import { AvionesHttpService } from './avion-http.service';

describe('AvionHttpService', () => {
  let service: AvionesHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvionesHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});