import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs';
import { Inscripcion }  from '../../../shared/entities';

@Injectable({ providedIn: 'root' })
export class InscripcionesApi {
  private baseUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) {}

  getInscripciones(): Observable<Inscripcion[]> {
    return this.http.get<Inscripcion[]>(`${this.baseUrl}/inscripciones`);
  }

}