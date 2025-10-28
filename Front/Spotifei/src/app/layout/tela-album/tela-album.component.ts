import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tela-album',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './tela-album.component.html',
  styleUrls: ['./tela-album.component.css']
})
export class TelaAlbumComponent {
  album = {
    coverUrl: 'assets/capa.jpg',
    title: 'Demon Days',
    artist: 'Gorilazz',
    year: '2005',
    tracks: [
      'Faixa 1 - Introdução',
      'Faixa 2 - Batida Forte',
      'Faixa 3 - Melodia Suave',
      'Faixa 4 - Encerramento'
    ]
  };
}
