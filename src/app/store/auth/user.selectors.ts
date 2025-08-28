import { createSelector } from '@ngrx/store';
import { authFeature } from './user.reducer';

export const selectAuth = authFeature.selectAuthState;
export const selectUser = createSelector(selectAuth, (s) => s.user);
export const selectUserRole = createSelector(selectUser, (u) => u?.role);
export const selectUserLoading = authFeature.selectLoading;
export const selectUserError   = authFeature.selectError;
