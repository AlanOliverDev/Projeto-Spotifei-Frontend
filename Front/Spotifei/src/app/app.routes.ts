import { Routes } from '@angular/router';
import { EquipeComponent } from './equipe/equipe.component';
import { PerfilComponent } from './layout/perfil/perfil.component';
import { LoginComponent } from './layout/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { TelaAlbumComponent } from './layout/tela-album/tela-album.component';

export const routes: Routes = [
    { path: "equipe", component: EquipeComponent },
    {path: "perfil", component: PerfilComponent},
    {path: "login", component: LoginComponent},
    {path: "layout", component: LayoutComponent},
    {path: "tela-album", component: TelaAlbumComponent},
    {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
    }

];
