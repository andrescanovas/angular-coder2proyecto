// import { TestBed } from '@angular/core/testing';
// import { CanActivateFn } from '@angular/router';

// import { authGuardGuard } from './auth.guard-guard';

// describe('authGuardGuard', () => {
//   const executeGuard: CanActivateFn = (...guardParameters) => 
//       TestBed.runInInjectionContext(() => authGuardGuard(...guardParameters));

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//   });

//   it('should be created', () => {
//     expect(executeGuard).toBeTruthy();
//   });
// });
// src/shared/guards/auth.guard.spec.ts
// src/shared/guards/auth.guard.spec.ts

import { TestBed }     from '@angular/core/testing';
import { Router }      from '@angular/router';
import { AuthGuard }   from './auth.guard';
import { Auth }        from '../../app/core/auth/auth';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authSpy: jasmine.SpyObj<Auth>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    // Creamos dos “spies” para inyectarlos en lugar de los servicios reales:
    authSpy   = jasmine.createSpyObj('Auth', ['isLoggedIn']);
    routerSpy = jasmine.createSpyObj('Router', ['createUrlTree']);
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: Auth,   useValue: authSpy },
        { provide: Router, useValue: routerSpy }
      ]
    });
    guard      = TestBed.inject(AuthGuard);
  });

  it('debería crearse', () => {
    expect(guard).toBeTruthy();
  });

  it('permite el acceso si isLoggedIn() devuelve true', () => {
    authSpy.isLoggedIn.and.returnValue(true);
    expect(guard.canActivate()).toBeTrue();
  });

  it('redirige a /login si isLoggedIn() devuelve false', () => {
    authSpy.isLoggedIn.and.returnValue(false);
    const fakeTree = {} as any;
    routerSpy.createUrlTree.and.returnValue(fakeTree);

    const result = guard.canActivate();
    expect(routerSpy.createUrlTree).toHaveBeenCalledWith(['/login']);
    expect(result).toBe(fakeTree);
  });
});