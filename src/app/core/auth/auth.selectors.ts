
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

const selectAuthFeature = createFeatureSelector<AuthState>('auth');

export const selectUser = createSelector(
  selectAuthFeature,
  state => state.user
);

export const selectIsLoggedIn = createSelector(
  selectUser,
  user => !!user
);

export const selectLoading = createSelector(
  selectAuthFeature,
  state => state.loading
);

export const selectError = createSelector(
  selectAuthFeature,
  state => state.error
);