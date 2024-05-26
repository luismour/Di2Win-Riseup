
import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectDocumentoComponent } from '../../../../components/select-documento/select-documento.component';
import{SelectUsuarioComponent} from '../../../../components/select-usuario/select-usuario.component'
import {BaixarBotaoSinteticoComponent} from '../../../../components/baixar-botao-sintetico/baixar-botao-sintetico.component'
import {TabelaSinteticoComponent} from '../../../../components/tabela-sintetico/tabela-sintetico.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectDateComponent } from '../../../../components/select-date/select-date.component';


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
