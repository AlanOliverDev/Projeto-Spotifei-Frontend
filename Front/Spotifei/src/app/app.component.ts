import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Spotifei';
}
