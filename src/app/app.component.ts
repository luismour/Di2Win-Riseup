import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { LoginComponent } from './user/login/login.component';
import { CadastroComponent } from './user/cadastro/cadastro.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RelatorioComponent, LoginComponent, CadastroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Di2winProject';
}
