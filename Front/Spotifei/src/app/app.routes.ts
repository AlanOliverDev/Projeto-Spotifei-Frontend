import { Routes } from '@angular/router';
import { EquipeComponent } from './equipe/equipe.component';
import { LoginComponent } from './layout/login/login.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    { path: 'equipe', component: EquipeComponent },
    { path: 'login', component: LoginComponent},
    { path: 'layout', component: LayoutComponent}
];
