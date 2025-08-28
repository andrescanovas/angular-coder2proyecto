import { Injectable, inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map, take, tap } from 'rxjs';
import { selectUser } from '../../app/store/auth/user.selectors';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  private store = inject(Store);
  private router = inject(Router);

  canActivate(): Observable<boolean> {
    return this.store.select(selectUser).pipe(
      take(1),
      map(user => !!user && user.role === 'admin'),
      tap(ok => {
        if (!ok) this.router.navigate(['/login']);
      })
    );
  }
}
