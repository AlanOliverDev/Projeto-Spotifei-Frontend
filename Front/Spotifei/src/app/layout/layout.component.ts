import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  logado: boolean = false;

  // pra poder mostrar ou nao o botao de entrar na aba layout, baseado em caso o usuario esteja logado
  setLoginStatus(status: boolean) {
    this.logado = status;
  }
}
