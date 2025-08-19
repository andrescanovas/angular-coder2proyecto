import { Injectable }     from '@angular/core';
import { CanActivate,
         Router,
         UrlTree }       from '@angular/router';
import { Auth } from '../../app/core/auth/auth';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(
    private auth: Auth,
    private router: Router
  ) {}

  canActivate(): boolean | UrlTree {
    // Si está logueado dejamos pasar
    if ( this.auth.isLoggedIn() ) {
      return true;
    }
    // Si no, lo mandamos al login
    return this.router.createUrlTree(['/login']);
  }
}