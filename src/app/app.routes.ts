import { Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home.component').then((c) => c.HomeComponent),
      },
    ],
  },
  {
    path: 'sigin-in',
    loadComponent: () =>
      import('./pages/sign-in/sign-in.component').then(
        (c) => c.SignInComponent
      ),
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent,
  },
];
