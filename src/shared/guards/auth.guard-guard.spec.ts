import { TestBed } from '@angular/core/testing';
import { Router, UrlTree } from '@angular/router';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';


import { selectIsLoggedIn } from '../../app/core/auth/auth.selectors';
import { AuthGuard } from './auth.guard-guard';

describe('AuthGuard (NgRx)', () => {
  let guard: AuthGuard;
  let store: MockStore;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    // Creamos un spy para Router
    routerSpy = jasmine.createSpyObj('Router', ['createUrlTree']);

    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: Router, useValue: routerSpy },
        // Proveemos un mock de Store
        provideMockStore()
      ]
    });

    guard = TestBed.inject(AuthGuard);
    store = TestBed.inject(MockStore);
  });

  it('should allow activation when logged in', (done) => {
    // Override del selector para que devuelva true
    store.overrideSelector(selectIsLoggedIn, true);

    guard.canActivate().subscribe(result => {
      expect(result).toBe(true);
      done();
    });
  });

  it('should redirect to /login when not logged in', (done) => {
    const fakeTree = {} as UrlTree;
    routerSpy.createUrlTree.and.returnValue(fakeTree);
    // Override del selector para que devuelva false
    store.overrideSelector(selectIsLoggedIn, false);

    guard.canActivate().subscribe(result => {
      expect(routerSpy.createUrlTree)
        .toHaveBeenCalledWith(['/login']);
      expect(result).toBe(fakeTree);
      done();
    });
  });
});