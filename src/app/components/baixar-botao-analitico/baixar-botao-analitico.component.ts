import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

interface DadosDocumento {
  tipoDocumento: string;
  data: Date;
  quantidadePaginas: number;
}

@Component({
  selector: 'app-baixar-botao-analitico',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
  ],
  templateUrl: './baixar-botao-analitico.component.html',
  styleUrl: './baixar-botao-analitico.component.css'
})
export class BaixarBotaoAnaliticoComponent {
  dataSource = new MatTableDataSource<DadosDocumento>([]);
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



  baixarDados() {
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
