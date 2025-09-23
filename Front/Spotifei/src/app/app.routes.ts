import { Routes } from '@angular/router';
import { EquipeComponent } from './equipe/equipe.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './layout/login/login.component';

export const routes: Routes = [
    { path: 'equipe', component: EquipeComponent },
    { path: 'layout', component: LayoutComponent},
    { path: 'login', component: LoginComponent},
];
