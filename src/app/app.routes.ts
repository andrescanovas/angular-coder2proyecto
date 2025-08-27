// src/app/app.routes.ts
import { Routes }      from '@angular/router';
import { AuthGuard }   from '../shared/guards/auth.guard-guard';
import { RoutePaths }  from '../shared/routes';
import { Login } from './features/login/login';

export const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: RoutePaths.ALUMNOS },


  {
        path: RoutePaths.LOGIN,
        component: Login
    },

 
  {
    path: RoutePaths.ALUMNOS,
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./features/alumnos/alumnos').then(m => m.Alumnos)
  },

 
  {
    path: RoutePaths.VIEWSTUDENT,
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./features/alumnos/view-student/view-student').then(m => m.ViewStudent)
  },


  {
    path: RoutePaths.EDITSTUDENT,
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./features/alumnos/edit-student/edit-student').then(m => m.EditStudent)
  },


  {
    path: RoutePaths.CURSOS,
    loadComponent: () =>
      import('./features/cursos/cursos').then(m => m.Cursos)
  },

 
  {
    path: RoutePaths.VIEWCURSOS,
    loadComponent: () =>
      import('./features/cursos/view-cursos/view-cursos').then(m => m.ViewCursos)
  },

 
  {
    path: RoutePaths.INSCRIPCIONES,
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./features/inscripciones/inscripciones').then(m => m.Inscripciones)
  },

  
  {
    path: RoutePaths.VIEWINSCRIPCIONES,
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./features/inscripciones/view-inscripciones/view-inscripciones').then(m => m.ViewInscripciones)
  },


  {
    path: RoutePaths.HOME,
    loadComponent: () =>
      import('./home/home').then(m => m.Home)
  },


  {
    path: RoutePaths.USER,
    loadComponent: () =>
      import('./usuario/usuario').then(m => m.Usuario)
  },


  {
    path: RoutePaths.ERROR404,
    loadComponent: () =>
      import('./features/error404/error404').then(m => m.Error404)
  },

 
  { path: '**', redirectTo: RoutePaths.ERROR404 }
];