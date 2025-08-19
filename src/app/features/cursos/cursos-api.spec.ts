// src/app/features/cursos/cursos-api.spec.ts
import { TestBed }                  from '@angular/core/testing';
import { HttpClientTestingModule }  from '@angular/common/http/testing';
import { CursosAPI }                from './cursos-api';

describe('CursosAPI', () => {
  let service: CursosAPI;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:  [
        // 1) IMPORTA EL MÓDULO DE TESTING DE HTTP
        HttpClientTestingModule
      ],
      providers: [
        // 2) REGISTRA TU SERVICIO
        CursosAPI
      ]
    });
    service = TestBed.inject(CursosAPI);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});