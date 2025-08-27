// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom }  from '@angular/core';
import { HttpClientModule }     from '@angular/common/http';
import { RouterModule }         from '@angular/router';

// NgRx “clásico”
import { StoreModule }          from '@ngrx/store';
import { EffectsModule }        from '@ngrx/effects';

import { App }            from './app/app';
import { routes }         from './app/app.routes';
import { authReducer }    from './app/core/auth/auth.reducer';
import { AuthEffects }    from './app/core/auth/auth.effects';

bootstrapApplication(App, {
  providers: [
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(RouterModule.forRoot(routes)),

    // De aquí en adelante NgRx
    importProvidersFrom(StoreModule.forRoot({ auth: authReducer })),
    importProvidersFrom(EffectsModule.forRoot([ AuthEffects ]))
  ]
})
.catch(err => console.error(err));