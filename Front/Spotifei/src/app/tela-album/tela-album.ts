import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tela-album',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tela-album.html',
  styleUrls: ['./tela-album.css']
})
export class TelaAlbum {
  album = {
    coverUrl: 'assets/capa.jpg', // Substitua pelo caminho real da imagem
    title: 'Álbum Exemplo',
    artist: 'Artista Exemplo',
    year: '2025',
    tracks: [
      'Faixa 1 - Introdução',
      'Faixa 2 - Batida Forte',
      'Faixa 3 - Melodia Suave',
      'Faixa 4 - Encerramento'
    ]
  };
}