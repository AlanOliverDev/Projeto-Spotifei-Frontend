import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms'; // ngModel
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  senha: string = '';
  erro: string = '';

  constructor(private http: HttpClient) {}

  login() {
    // chamada para a sua API
    this.http.post<boolean>("/api/login", { email: this.email, senha: this.senha })
      .subscribe({
        next: (ok) => {
          if (ok) {
            alert("Login OK!");
            this.erro = '';
            // aqui você pode navegar usando RouterLink no HTML ou Router programaticamente
          } else {
            this.erro = "Usuário ou senha inválidos";
          }
        },
        error: (err) => {
          console.error(err);
          this.erro = "Erro ao tentar logar";
        }
      });
  }
}
