import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SessaoComponent } from './sessao/sessao.component';

@Component({
  selector: 'app-relatorio',
  standalone: true,
  imports: [RouterOutlet, SessaoComponent],
  templateUrl: './relatorio.component.html',
  styleUrl: './relatorio.component.css'
})
export class RelatorioComponent {

}
