
import { Component, OnInit, ViewChild } from '@angular/core';
import {TabelaSinteticoComponent} from '../../../../components/tabela-sintetico/tabela-sintetico.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectDocumentoComponent } from '../../../../components/botoes/select-documento/select-documento.component';
import { BaixarBotaoSinteticoComponent } from '../../../../components/botoes/baixar-botao-sintetico/baixar-botao-sintetico.component';
import { SelectUsuarioComponent } from '../../../../components/botoes/select-usuario/select-usuario.component';
import { SelectDateComponent } from '../../../../components/botoes/select-date/select-date.component';



@Component({
  selector: 'app-relatorio-sintetico',
  standalone: true,
  imports: [
    SelectDocumentoComponent,
    TabelaSinteticoComponent,
    BaixarBotaoSinteticoComponent,
    SelectUsuarioComponent,
    CommonModule,
    FormsModule,
    SelectDateComponent,
  ],
  templateUrl: './relatorio-sintetico.component.html',
  styleUrls: ['./relatorio-sintetico.component.css'],
})
export class RelatorioSinteticoComponent  {
 
}
