import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Usuario } from './usuario/usuario';
import { RoutePaths } from '../shared/routes';
import { Alumnos } from './features/alumnos/alumnos';


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

];
