import { createFeature, createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import { AuthState } from './user.model';


export const AUTH_FEATURE_KEY = 'auth';

export const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const reducer = createReducer(
  initialState,
  on(UserActions.loginUser, (state) => ({ ...state, loading: true, error: null })),
  on(UserActions.loginUserSuccess, (state, { user }) => ({ ...state, user, loading: false })),
  on(UserActions.loginUserError, (state, { error }) => ({ ...state, loading: false, error })),
  on(UserActions.logout, () => initialState)
);

export const authFeature = createFeature({
  name: AUTH_FEATURE_KEY,
  reducer,
});

export const { name, reducer: authReducer, selectAuthState } = authFeature;
