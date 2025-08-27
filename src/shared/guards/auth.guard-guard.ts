
import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  UrlTree
} from '@angular/router';
import { Store } from '@ngrx/store';

import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { selectIsLoggedIn } from '../../app/core/auth/auth.selectors';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private store: Store,
    private router: Router
  ) {}

  canActivate(): Observable<boolean|UrlTree> {
    return this.store.select(selectIsLoggedIn).pipe(

      take(1),
      map(logged => {
        if (logged) {
          return true;
        }

        return this.router.createUrlTree(['/login']);
      })
    );
  }
}