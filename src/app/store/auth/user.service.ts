import { Injectable } from '@angular/core';
import { delay, map, Observable, of, throwError } from 'rxjs';
import { User } from './user.model';


@Injectable({ providedIn: 'root' })
export class AuthService {
  // Users de prueba
  private users: Array<{username:string; password:string; role:'admin'|'user'}> = [
    { username: 'admin', password: 'admin', role: 'admin' },
    { username: 'pepe',  password: '1234',  role: 'user'  },
  ];

  login(username: string, password: string): Observable<User> {
    const found = this.users.find(u => u.username === username && u.password === password);
    if (!found) {
      return throwError(() => new Error('Credenciales inválidas'));
    }
    const user: User = {
      id: Math.floor(Math.random()*1000),
      username: found.username,
      role: found.role,
      token: 'fake-jwt-' + crypto.randomUUID()
    };
    // simula red
    return of(user).pipe(delay(800));
  }
}
