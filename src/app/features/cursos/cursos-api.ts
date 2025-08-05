
import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs';
import { Course }       from '../../../shared/entities';

@Injectable({ providedIn: 'root' })
export class CursosAPI {
  private baseUrl = 'http://localhost:3000'; 
  constructor(private http: HttpClient) {}

  getCursos(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}/courses`);
  }

}