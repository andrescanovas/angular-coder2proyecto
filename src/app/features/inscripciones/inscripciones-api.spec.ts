import { TestBed }                  from '@angular/core/testing';
import { HttpClientTestingModule }  from '@angular/common/http/testing';
import { InscripcionesApi }         from './inscripciones-api';

describe('InscripcionesApi', () => {
  let service: InscripcionesApi;

  beforeEach(() => {
    TestBed.configureTestingModule({
     
      imports:  [ HttpClientTestingModule ],
     
      providers:[ InscripcionesApi ]
    });
    service = TestBed.inject(InscripcionesApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});