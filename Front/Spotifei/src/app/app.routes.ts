import { Routes } from '@angular/router';
import { EquipeComponent } from './equipe/equipe.component';
=======
import { PerfilComponent } from './layout/perfil/perfil.component';
import { LoginComponent } from './layout/login/login.component';

export const routes: Routes = [
    { path: "equipe", component: EquipeComponent },
    {path: "perfil", component: PerfilComponent},
    {path: "login", component: LoginComponent},
    {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
    }

];
