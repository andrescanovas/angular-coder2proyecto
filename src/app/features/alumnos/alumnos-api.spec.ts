import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AlumnosAPI } from './alumnos-api';
import { Student } from '../../../shared/entities';

describe('AlumnosAPI', () => {
  let service: AlumnosAPI;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AlumnosAPI]
    });
    service = TestBed.inject(AlumnosAPI);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify(); // Verifica que no haya solicitudes pendientes
  });

  it('should fetch students from mock API', () => {
    const mockStudents: Student[] = [
      { id: 1, name: 'Alice', surname: 'Smith', age: 22, dni: 12345678, average: 8.5 },
      { id: 2, name: 'Bob', surname: 'Johnson', age: 25, dni: 87654321, average: 7.2 }
    ];

    service.getAlumnos().subscribe(students => {
      expect(students).toBeTruthy();
      expect(students).toEqual(mockStudents);
    });

    const req = httpTestingController.expectOne('https://689f46043fed484cf879a28c.mockapi.io//students');
    expect(req.request.method).toEqual('GET');

    req.flush(mockStudents);
  });
});