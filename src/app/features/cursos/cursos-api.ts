
import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs';
import { Course }       from '../../../shared/entities';

@Injectable({ providedIn: 'root' })
export class CursosAPI {
  private baseUrl = 'https://68a5fde72a3deed2960f8fe0.mockapi.io'; 
  constructor(private http: HttpClient) {}

  getCursos(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}/courses`);
  }

}