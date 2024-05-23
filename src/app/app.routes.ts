import { Routes } from '@angular/router';
import { SessaoComponent } from './sessao/sessao.component';
import { RelatorioAnaliticoComponent } from './sessao/pages/relatorio-analitico/relatorio-analitico.component';
import { RelatorioSinteticoComponent } from './sessao/pages/relatorio-sintetico/relatorio-sintetico.component';

export const routes: Routes = [
  { path: '', component: RelatorioAnaliticoComponent },
  { path: 'Relatorio-sintático', component: RelatorioSinteticoComponent },
  { path: '**', redirectTo: '' },
];
