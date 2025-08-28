
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Login } from './login';


import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { selectUserLoading, selectUserError } from '../../store/auth/user.selectors';

describe('Login', () => {
  let component: Login;
  let fixture: ComponentFixture<Login>;
  let store: MockStore;

  const initialState = {
    auth: { user: null, loading: false, error: null },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({

      imports: [Login],
  
      providers: [
        provideMockStore({ initialState }),
      ],
    }).compileComponents();


    store = TestBed.inject(MockStore);
    store.overrideSelector(selectUserLoading, false);
    store.overrideSelector(selectUserError, null);
    store.refreshState();

    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
