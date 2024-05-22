import { Routes } from '@angular/router';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { SessaoComponent } from './sessao/sessao.component';
import {RelatorioSintaticoComponent} from './relatorio-sintatico/relatorio-sintatico.component'

export const routes: Routes = [
    {path: '', component: RelatorioComponent},
    {path: 'Relatorio-sintático', component: RelatorioSintaticoComponent},
    {path:'**', redirectTo:''}
];
