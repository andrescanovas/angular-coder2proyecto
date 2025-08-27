// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class Auth {
//   userData = [
//     { username: 'admin', password: 'admin', role: 'admin' },
//     { username: 'user', password: 'user', role: 'user' },
//   ];
  
//   private loggedUserSubject = new BehaviorSubject<{ username: string, role: string } | null>(null);
//   loggedUser$ = this.loggedUserSubject.asObservable();

//   constructor() {}

//   login(username: string, password: string): boolean { 
//     const user = this.userData.find(u => u.username === username && u.password === password);
//     if (user) {
//       this.loggedUserSubject.next({ username: user.username, role: user.role });
//       return true;
//     }
//     return user !== undefined;
//   }

//   isAdmin(): boolean {
//     const user = this.userData.find(u => u.username === 'admin');
//     return user !== undefined;
//   }

//   isLoggedIn(): boolean {
//     return this.loggedUserSubject.value !== null;
//   }
// }