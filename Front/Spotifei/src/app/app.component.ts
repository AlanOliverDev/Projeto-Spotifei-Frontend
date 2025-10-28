import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { PerfilComponent } from './layout/perfil/perfil.component';
import { LoginComponent } from './layout/login/login.component';
import { TelaAlbumComponent } from './layout/tela-album/tela-album.component';
import { CriacaoPlaylistComponent } from './layout/criacao-playlist/criacao-playlist.component';


@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet, LayoutComponent, PerfilComponent, LoginComponent, TelaAlbumComponent, CriacaoPlaylistComponent ],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Spotifei';
}
