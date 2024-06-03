import { Routes } from '@angular/router';
import { SessaoComponent } from './relatorio/sessao/sessao.component';
import { RelatorioAnaliticoComponent } from './relatorio/sessao/pages/relatorio-analitico/relatorio-analitico.component';
import { RelatorioSinteticoComponent } from './relatorio/sessao/pages/relatorio-sintetico/relatorio-sintetico.component';
import { LoginComponent } from './user/login/login.component';
import { CadastroComponent } from './user/cadastro/cadastro.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { DashboardComponent } from './relatorio/sessao/pages/dashboard/dashboard.component';
import { RecuperarSenhaComponent } from './user/recuperar-senha/recuperar-senha.component';


export const routes: Routes = [
  {
    path: 'relatorio',
    component: SessaoComponent,
    children: [
      { path: 'sintetico', component: RelatorioSinteticoComponent },
      { path: 'analitico', component: RelatorioAnaliticoComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: 'analitico', pathMatch: 'full' },
    ],
  },

  { path: 'login', component: LoginComponent},
  { path: 'cadastr', component: CadastroComponent},
  { path: 'recuperar-senha', component: RecuperarSenhaComponent},
  { path: '**', redirectTo: 'login' },
];
