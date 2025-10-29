import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-criacao-playlist',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './criacao-playlist.component.html',
  styleUrl: './criacao-playlist.component.css'
})
export class CriacaoPlaylistComponent {

}
