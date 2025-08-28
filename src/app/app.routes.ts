import { ViewInscripciones } from './features/inscripciones/view-inscripciones/view-inscripciones';

import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Usuario } from './usuario/usuario';
import { RoutePaths } from '../shared/routes';
import { Alumnos } from './features/alumnos/alumnos';
import { ViewStudent } from './features/alumnos/view-student/view-student';
import { Login } from './features/login/login';
import { AuthGuard } from '../shared/guards/auth.guard';


export const routes: Routes = [

    {
        path: '',
        canActivate: [AuthGuard],
        component: Alumnos

        
    },
    {
        path: RoutePaths.LOGIN,
        component: Login
    },
    {
        path: RoutePaths.HOME,
        component: Home
    },
     {
        path: 'usuarios/:id',
        component: Usuario
    },
     {
        path: RoutePaths.ALUMNOS,
        canActivate: [AuthGuard],
        loadComponent:() => import('./features/alumnos/alumnos').then(m=>m.Alumnos)
    },
     {
        path: RoutePaths.CURSOS,
        loadComponent:() => import('./features/cursos/cursos').then(m=>m.Cursos)
    },
    {
        path: RoutePaths.VIEWSTUDENT,
        component: ViewStudent
    },
        {
        path: RoutePaths.INSCRIPCIONES,
         loadComponent: () => import('./features/inscripciones/inscripciones').then(m => m.Inscripciones)
    },
   {
        path: RoutePaths.VIEWCURSOS,              
        loadComponent: () => import('./features/cursos/view-cursos/view-cursos').then(m => m.ViewCursos)
    },
            {
        path:RoutePaths.EDITSTUDENT ,
         loadComponent: () => import('./features/alumnos/edit-student/edit-student').then(m => m.EditStudent)
    },
            {
        path: 'view-inscripciones',
         loadComponent: () => import('./features/inscripciones/view-inscripciones/view-inscripciones').then(m => m.ViewInscripciones)
    },
    {
        path: 'edit-student',
        loadComponent: () => import('./features/alumnos/edit-student/edit-student').then(m => m.EditStudent)
    },
    {
        path: RoutePaths.ERROR404,
        loadComponent: () => import('./features/error404/error404').then(m => m.Error404)
    },
    {
        path: "**",
        redirectTo: RoutePaths.ERROR404
    }


];
