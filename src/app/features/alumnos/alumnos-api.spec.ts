import { TestBed }                 from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AlumnosAPI }              from './alumnos-api';

describe('AlumnosAPI', () => {
  let service: AlumnosAPI;

  beforeEach(() => {
    TestBed.configureTestingModule({
    
      imports: [ HttpClientTestingModule ],
      providers: [ AlumnosAPI ]
    });
    service = TestBed.inject(AlumnosAPI);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});