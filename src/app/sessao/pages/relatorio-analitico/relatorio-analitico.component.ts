import { Component, OnInit, ViewChild } from '@angular/core';
import {BaixarBotaoAnaliticoComponent} from '../../../components/baixar-botao-analitico/baixar-botao-analitico.component'

import { MatPaginator } from '@angular/material/paginator';
import { SelectDocumentoComponent } from '../../../components/select-documento/select-documento.component';
import {SelectDateComponent} from '../../../components/select-date/select-date.component'
import{TabelaAnaliticoComponent} from '../../../components/tabela-analitico/tabela-analitico.component'

import { MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';

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
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
  ],
  templateUrl: './relatorio-analitico.component.html',
  styleUrls: ['./relatorio-analitico.component.css'],
})
export class RelatorioAnaliticoComponent implements OnInit {
  displayedColumns: string[] = ['tipoDocumento', 'data', 'quantidadePaginas'];
  dataSource = new MatTableDataSource<DadosDocumento>([]);
  tiposDocumento = ['Relatório', 'Fatura', 'Contrato', 'Outros'];
  tipoDocumentoSelecionado: string = ''; // Inicialização com valor padrão
  dataSelecionada: Date | null = null; // Inicialização com valor nulo

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    // Inicialize com dados fictícios ou carregue os dados de uma API
    this.dataSource.data = [
      {
        tipoDocumento: 'Relatório',
        data: new Date('2023-05-20'),
        quantidadePaginas: 10,
      },
      {
        tipoDocumento: 'RG',
        data: new Date('2023-05-21'),
        quantidadePaginas: 5,
      },
      {
        tipoDocumento: 'Fatura',
        data: new Date('2023-05-21'),
        quantidadePaginas: 5,
      },
    ];
  }

  ngAfterViewInit() {
    // Conectar o paginator ao dataSource após a visualização ser inicializada
    this.dataSource.paginator = this.paginator;
  }

  aplicarFiltro() {
    this.dataSource.filterPredicate = (
      data: DadosDocumento,
      filtro: string
    ) => {
      const matchFilter: boolean[] = [];
      const filtroArray = filtro.split('$');
      const colunas = [
        data.tipoDocumento.toLowerCase(),
        data.data.toDateString(),
        data.quantidadePaginas.toString(),
      ];

      filtroArray.forEach((filtro, index) => {
        const filtroCustomizado = colunas[index]
          .trim()
          .toLowerCase()
          .includes(filtro);
        matchFilter.push(filtroCustomizado);
      });
      return matchFilter.every(Boolean);
    };

    const valorFiltro = `${this.tipoDocumentoSelecionado.toLowerCase() || ''}$${
      this.dataSelecionada
        ? this.dataSelecionada.toDateString().toLowerCase()
        : ''
    }`;
    this.dataSource.filter = valorFiltro.trim().toLowerCase();
  }

}
