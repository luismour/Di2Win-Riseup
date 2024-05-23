import { Routes } from '@angular/router';
import { SessaoComponent } from './sessao/sessao.component';
import {RelatorioSinteticoComponent} from './sessao/pages/relatorio-sintetico/relatorio-sintetico.component'
import { RelatorioAnaliticoComponent } from './sessao/pages/relatorio-analitico/relatorio-analitico.component';

export const routes: Routes = [
    {path: '', component: RelatorioAnaliticoComponent},
    {path: 'Relatorio-sintático', component: RelatorioSinteticoComponent},
    {path:'**', redirectTo:''}
];
