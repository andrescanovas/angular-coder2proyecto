import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Usuario } from './usuario/usuario';
import { RoutePaths } from '../shared/routes';


export const routes: Routes = [

    {
        path: '',
        component: Home
    },
    {
        path: RoutePaths.HOME,
        component: Home
    },
     {
        path: 'usuarios/:id',
        component: Usuario
    },
];
