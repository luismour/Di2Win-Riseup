import { Component, OnInit, ViewChild } from '@angular/core';
import {BaixarBotaoAnaliticoComponent} from '../../../components/baixar-botao-analitico/baixar-botao-analitico.component'

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { SelectDocumentoComponent } from '../../../components/select-documento/select-documento.component';
import {SelectDateComponent} from '../../../components/select-date/select-date.component'
import{TabelaAnaliticoComponent} from '../../../components/tabela-analitico/tabela-analitico.component'


import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

interface DadosDocumento {
  tipoDocumento: string;
  data: Date;
  quantidadePaginas: number;
}

@Component({
  selector: 'app-relatorio-analitico',
  standalone: true,
  imports: [
    SelectDocumentoComponent,
    TabelaAnaliticoComponent,
    SelectDateComponent,
    BaixarBotaoAnaliticoComponent,
    CommonModule,
    FormsModule,
    MatPaginator,
    MatPaginatorModule,
    MatTableModule,
  ],
  templateUrl: './relatorio-analitico.component.html',
  styleUrls: ['./relatorio-analitico.component.css'],
})
export class RelatorioAnaliticoComponent {
  dataSource = new MatTableDataSource<DadosDocumento>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    // Conectar o paginator ao dataSource após a visualização ser inicializada
    this.dataSource.paginator = this.paginator;
  }
}
