import { TestBed } from '@angular/core/testing';

import { InscripcionesApi } from './inscripciones-api';

describe('InscripcionesApi', () => {
  let service: InscripcionesApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InscripcionesApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
