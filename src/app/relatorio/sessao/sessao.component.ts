import { Component } from '@angular/core';
import { BarraLateralComponent } from '../barra-lateral/barra-lateral.component';
import { RouterOutlet } from '@angular/router';
import { RelatorioAnaliticoComponent } from './pages/relatorio-analitico/relatorio-analitico.component';
import { RelatorioSinteticoComponent } from './pages/relatorio-sintetico/relatorio-sintetico.component';
import { NavComponent } from '../nav/nav.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@Component({
  selector: 'app-conteudo',
  standalone: true,
  imports: [
    BarraLateralComponent,
    RouterOutlet,
    RelatorioAnaliticoComponent,
    RelatorioSinteticoComponent,
    DashboardComponent,
    NavComponent,
  ],
  templateUrl: './sessao.component.html',
  styleUrl: './sessao.component.css',
})
export class SessaoComponent {}
