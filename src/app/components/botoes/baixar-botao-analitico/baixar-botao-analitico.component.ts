import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import { DadosDocumentoService } from '../../../dados-documento-analitico.service';
import { DadosDocumento } from '../../../dados-documento-analitico.model';


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
  constructor(private dadosService: DadosDocumentoService) {}

  baixarDados() {
    const dados = this.dadosService.getDados();
    const dadosCSV = this.converterParaCSV(dados);
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
