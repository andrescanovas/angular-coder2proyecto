import { Injectable } from '@angular/core';
import { Student } from '../../../shared/entities';
import { delay, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnosAPI {
  // baseUrl = "http://localhost:3000";
  baseUrl ="https://689f46043fed484cf879a28c.mockapi.io/"
  constructor(
    private http: HttpClient
  ) { }
  getAlumnos(): Observable<Student[]> {
  
    return this.http.get<Student[]>(`${this.baseUrl}/students`).pipe(delay(1000));
  }


  deleteAlumno(student: Student): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/students/${student.id}`).pipe(delay(1000));
  }

   updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.baseUrl}/students/${student.id}`, student).pipe(delay(1000));
  }



  
}