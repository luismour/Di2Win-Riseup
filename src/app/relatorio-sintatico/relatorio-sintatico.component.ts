import { Component, OnInit } from '@angular/core';
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

interface DadosDocumento {
  tipoDocumento: string;
  data: Date;
  quantidadePaginas: number;
}

@Component({
  selector: 'app-relatorio-sintatico',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
  ],
  templateUrl: './relatorio-sintatico.component.html',
  styleUrls: ['./relatorio-sintatico.component.css'],
})
export class RelatorioSintaticoComponent implements OnInit {
  displayedColumns: string[] = ['tipoDocumento', 'data', 'quantidadePaginas'];
  dataSource = new MatTableDataSource<DadosDocumento>([]);
  tiposDocumento = ['Relatório', 'Fatura', 'Contrato', 'Outros'];
  tipoDocumentoSelecionado: string = ''; // Inicialização com valor padrão
  dataSelecionada: Date | null = null; // Inicialização com valor nulo

  ngOnInit() {
    // Inicialize com dados fictícios ou carregue os dados de uma API
    this.dataSource.data = [
      {
        tipoDocumento: 'Relatório',
        data: new Date('2023-05-20'),
        quantidadePaginas: 10,
      },
      {
        tipoDocumento: 'Fatura',
        data: new Date('2023-05-21'),
        quantidadePaginas: 5,
      },
      // Adicione mais dados conforme necessário
    ];
  }

  aplicarFiltro() {
    // Filtrar os dados conforme necessário
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

  baixarDados() {
    // Lógica para baixar os dados (pode ser em CSV ou outro formato)
    const dadosCSV = this.converterParaCSV(this.dataSource.filteredData);
    const blob = new Blob([dadosCSV], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'documentos.csv');
    link.click();
  }

  converterParaCSV(dados: DadosDocumento[]): string {
    const cabecalho = ['Tipo de Documento', 'Data', 'Quantidade de Páginas'];
    const linhas = dados.map((d) => [
      d.tipoDocumento,
      d.data.toDateString(),
      d.quantidadePaginas,
    ]);

    const conteudoCSV =
      cabecalho.join(',') + '\n' + linhas.map((e) => e.join(',')).join('\n');
    return conteudoCSV;
  }
}
