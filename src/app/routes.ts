import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'guerras-list',
    loadChildren: () => import('./guerras-list/guerras-list.module').then(m => m.GuerrasListPageModule)
  },
];
