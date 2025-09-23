import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { PerfilComponent } from './layout/perfil/perfil.component';
import { LoginComponent } from './layout/login/login.component';


@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet, LayoutComponent, PerfilComponent, LoginComponent ],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Spotifei';
}
