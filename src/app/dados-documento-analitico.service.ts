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
        data: new Date('2023-05-22'),
        quantidadePaginas: 5,
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
