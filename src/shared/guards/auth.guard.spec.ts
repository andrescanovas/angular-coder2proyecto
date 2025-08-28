
import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { firstValueFrom } from 'rxjs';

import { AuthGuard } from './auth.guard';

import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { MemoizedSelector } from '@ngrx/store';
import { selectUser } from '../../app/store/auth/user.selectors';
import { User } from '../../app/store/auth/user.model';




describe('AuthGuard', () => {
  let guard: AuthGuard;
  let store: MockStore;
  let router: Router;

  
  let selectUserOverride: MemoizedSelector<unknown, User | null>;

  const initialState = {
    auth: { user: null, loading: false, error: null },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        provideMockStore({ initialState }),
        provideRouter([]), 
      ],
    });

    guard = TestBed.inject(AuthGuard);
    store = TestBed.inject(MockStore);
    router = TestBed.inject(Router);

   
    selectUserOverride = store.overrideSelector(selectUser, null);
  });

  it('debería crearse', () => {
    expect(guard).toBeTruthy();
  });

  it('permite el acceso si el usuario es admin', async () => {
    selectUserOverride.setResult({
      id: 1,
      username: 'admin',
      role: 'admin',
      token: 'x',
    } as User);
    store.refreshState();

    const result = await firstValueFrom(guard.canActivate());
    expect(result).toBeTrue();
  });

  it('redirige a /login si no hay usuario o no es admin', async () => {
    const navSpy = spyOn(router, 'navigate');

   
    selectUserOverride.setResult(null);
    store.refreshState();

    const result = await firstValueFrom(guard.canActivate());
    expect(result).toBeFalse();
    expect(navSpy).toHaveBeenCalledWith(['/login']);

    
    navSpy.calls.reset();
    selectUserOverride.setResult({
      id: 2,
      username: 'pepe',
      role: 'user',
      token: 'y',
    } as User);
    store.refreshState();

    const result2 = await firstValueFrom(guard.canActivate());
    expect(result2).toBeFalse();
    expect(navSpy).toHaveBeenCalledWith(['/login']);
  });
});
