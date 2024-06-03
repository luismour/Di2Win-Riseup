// src/app/dados-documento.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DadosDocumento } from './dados-documento-analitico.model'; // Certifique-se de que a interface está em um arquivo separado

@Injectable({
  providedIn: 'root',
})
export class DadosDocumentoService {
  private dadosSubject = new BehaviorSubject<DadosDocumento[]>([]);
  dados$ = this.dadosSubject.asObservable();

  constructor() {
    // Inicialize com dados fictícios ou carregue os dados de uma API
    const dadosIniciais: DadosDocumento[] = [
      {
        tipoDocumento: 'Relatorio',
        data: new Date('2024-05-20'),
        quantidadePaginas: 10,
      },
      {
        tipoDocumento: 'RG',
        data: new Date('2024-05-21'),
        quantidadePaginas: 1,
      },
      {
        tipoDocumento: 'Fatura',
        data: new Date('2024-05-22'),
        quantidadePaginas: 5,
      },
      {
        tipoDocumento: 'Certidao',
        data: new Date('2024-05-20'),
        quantidadePaginas: 2,
      },
      {
        tipoDocumento: 'RG',
        data: new Date('2024-05-10'),
        quantidadePaginas: 1,
      },
    ];
    this.dadosSubject.next(dadosIniciais);
  }

  setDados(dados: DadosDocumento[]) {
    this.dadosSubject.next(dados);
  }

  getDados(): DadosDocumento[] {
    return this.dadosSubject.value;
  }
}
