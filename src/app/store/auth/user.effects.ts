import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as UserActions from './user.actions';

import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './user.service';

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);
  private auth = inject(AuthService);
  private router = inject(Router);

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loginUser),
      mergeMap(({ username, password }) =>
        this.auth.login(username, password).pipe(
          map((user) => UserActions.loginUserSuccess({ user })),
          catchError((err) => of(UserActions.loginUserError({ error: err.message ?? 'Error' })))
        )
      )
    )
  );

  // Navegar al éxito
  loginSuccessNav$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.loginUserSuccess),
        tap(() => this.router.navigate(['/']))
      ),
    { dispatch: false }
  );

  // Al hacer logout te llevo a /login
  logoutNav$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.logout),
        tap(() => this.router.navigate(['/login']))
      ),
    { dispatch: false }
  );
}
