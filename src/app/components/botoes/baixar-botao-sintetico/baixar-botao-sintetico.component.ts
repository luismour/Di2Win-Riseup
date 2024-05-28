// src/app/baixar-botao-sintetico/baixar-botao-sintetico.component.ts
import { Component } from '@angular/core';
import { DadosDocumentoService } from '../../../dados-documento-sintetico.service';
import { DadosDocumento } from '../../../dados-documento-sintetico.model';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-baixar-botao-sintetico',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
  ],
  templateUrl: './baixar-botao-sintetico.component.html',
  styleUrls: ['./baixar-botao-sintetico.component.css']
})
export class BaixarBotaoSinteticoComponent {

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
    const cabecalho = ['Usuario', 'Data', 'Processadas na data escolhida', 'Total processado'];
    const linhas = dados.map((d) => [
      d.usuario,
      d.data.toDateString(),
      d.processadoData,
      d.totalProcessado,
    ]);

    const conteudoCSV =
      cabecalho.join(',') + '\n' + linhas.map((e) => e.join(',')).join('\n');
    return conteudoCSV;
  }
}
