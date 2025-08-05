import { ViewInscripciones } from './features/inscripciones/view-inscripciones/view-inscripciones';

import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Usuario } from './usuario/usuario';
import { RoutePaths } from '../shared/routes';
import { Alumnos } from './features/alumnos/alumnos';
import { ViewStudent } from './features/alumnos/view-student/view-student';


export const routes: Routes = [

    {
        path: '',
        component: Alumnos

        
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
        path: 'view-cursos',              
        loadComponent: () => import('./features/cursos/view-cursos/view-cursos').then(m => m.ViewCursos)
    },
            {
        path: 'view-inscripciones',
         loadComponent: () => import('./features/inscripciones/view-inscripciones/view-inscripciones').then(m => m.ViewInscripciones)
    },

];
