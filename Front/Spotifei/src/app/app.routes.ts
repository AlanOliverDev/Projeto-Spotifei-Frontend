import { Routes } from '@angular/router';
import { EquipeComponent } from './equipe/equipe.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './layout/login/login.component';

export const routes: Routes = [
  // Login sem layout
  { path: 'login', component: LoginComponent },

  // Rotas que usam o layout
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'equipe', component: EquipeComponent },
      { path: '', redirectTo: 'equipe', pathMatch: 'full' }
    ]
  },

  // fallback
  { path: '**', redirectTo: 'login' }
];
