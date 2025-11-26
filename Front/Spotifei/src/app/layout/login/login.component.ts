import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf, HttpClientModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  senha: string = '';
  erro: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    if (!this.email || !this.senha) {
      this.erro = "Preencha e-mail e senha!";
      return;
    }

   this.http.post<boolean>(`/api/login?email=${this.email}&senha=${this.senha}`, {})
  .subscribe({
    next: (ok) => {
      if (ok) {
        this.erro = '';
        this.router.navigate(['/layout']);
      } else {
        this.erro = 'Usuário ou senha inválidos';
      }
    },
    error: (err) => {
      console.error(err);
      this.erro = 'Erro ao tentar conectar com o servidor!';
    }
  });


  }
}
