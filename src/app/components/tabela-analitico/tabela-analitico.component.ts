import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';

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

import { DadosDocumentoService } from '../../dados-documento-analitico.service';
import { DadosDocumento } from '../../dados-documento-analitico.model';


@Component({
  selector: 'app-tabela-analitico',
  standalone: true,
  imports: [
    TabelaAnaliticoComponent,
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
  templateUrl: './tabela-analitico.component.html',
  styleUrl: './tabela-analitico.component.css'
})
export class TabelaAnaliticoComponent {
  displayedColumns: string[] = ['tipoDocumento', 'data', 'quantidadePaginas'];
  dataSource = new MatTableDataSource<DadosDocumento>([]);
  tiposDocumento = ['Relatório', 'Fatura', 'Contrato', 'Outros'];
  tipoDocumentoSelecionado: string = ''; // Inicialização com valor padrão
  dataSelecionada: Date | null = null; // Inicialização com valor nulo

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  
  ngAfterViewInit() {
    // Conectar o paginator ao dataSource após a visualização ser inicializada
    this.dataSource.paginator = this.paginator;
  }

  constructor(private dadosService: DadosDocumentoService) {
    this.dataSource.data = this.dadosService.getDados();
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
