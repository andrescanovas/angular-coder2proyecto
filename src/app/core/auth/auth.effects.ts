
import { Injectable }             from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router }                 from '@angular/router';
import { of }                     from 'rxjs';
import { exhaustMap, map, catchError, tap } from 'rxjs/operators';

import * as AuthActions           from './auth.actions';
import { AuthService }            from './auth.service';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      exhaustMap(({ username, password }) =>
        this.authService.login(username, password).pipe(
          map(user => AuthActions.loginSuccess({ user })),
          catchError(err => of(AuthActions.loginFailure({ error: err.message })))
        )
      )
    )
  );

  navigate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap(() => this.router.navigate(['/alumnos']))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}