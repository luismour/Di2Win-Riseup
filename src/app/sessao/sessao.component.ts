import { Component } from '@angular/core';
import {BarraLateralComponent} from '../barra-lateral/barra-lateral.component';
import {RelatorioComponent} from '../relatorio/relatorio.component'
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-conteudo',
  standalone: true,
  imports: [BarraLateralComponent, RelatorioComponent, RouterOutlet],
  templateUrl: './sessao.component.html',
  styleUrl: './sessao.component.css'
})
export class SessaoComponent {

}
