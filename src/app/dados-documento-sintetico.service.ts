// src/app/dados-documento.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DadosDocumento } from './dados-documento-sintetico.model'; // Certifique-se de que a interface está em um arquivo separado

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
        usuario: 'Fernando',
        data: new Date('2023-05-20'),
        processadoData: 3,
        totalProcessado: 9,
      },
      {
        usuario: 'Carla',
        data: new Date('2023-05-21'),
        processadoData: 1,
        totalProcessado: 3,
      },
      {
        usuario: 'Paulo',
        data: new Date('2023-05-21'),
        processadoData: 1,
        totalProcessado: 5,
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
