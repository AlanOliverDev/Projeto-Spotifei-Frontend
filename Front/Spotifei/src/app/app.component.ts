import { Component } from '@angular/core';
import { TelaAlbum } from './tela-album/tela-album'; 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TelaAlbum],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }