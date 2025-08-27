
import { Injectable } from '@angular/core';
import { of, throwError, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { User } from './auth.models';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userData = [
    { username: 'admin', password: 'admin', role: 'admin' },
    { username: 'user',  password: 'user',  role: 'user' }
  ];

  login(username: string, password: string): Observable<User> {
    const found = this.userData.find(
      u => u.username === username && u.password === password
    );
    if (found) {
      // simula un retraso de 500ms
      return of({ username: found.username, role: found.role }).pipe(delay(500));
    } else {
      return throwError(() => new Error('Credenciales inválidas'));
    }
  }
}