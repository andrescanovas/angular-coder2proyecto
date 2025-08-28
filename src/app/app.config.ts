import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

// NgRx
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { authReducer, AUTH_FEATURE_KEY } from './store/auth/user.reducer';
import { AuthEffects } from './store/auth/user.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),

    // Router
    provideRouter(routes),

    // NgRx
    provideStore({ [AUTH_FEATURE_KEY]: authReducer }),
    provideEffects([AuthEffects]),
    provideStoreDevtools(), // opcional
  ],
};
