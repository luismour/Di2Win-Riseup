// src/app/dados-documento.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DadosDocumento } from './dados-documento-sintetico.model';
import { Usuario } from './usuario.model'; 

@Injectable({
  providedIn: 'root',
})
export class DadosDocumentoService {
  private dadosSubject = new BehaviorSubject<DadosDocumento[]>([]);
  dados$ = this.dadosSubject.asObservable();

  constructor() {
    const dadosIniciais: DadosDocumento[] = [
      {
        usuario: 'Fernando',
        data: new Date('2024-05-20'),
        processadoData: 3,
        totalProcessado: 9,
      },
      {
        usuario: 'Carla',
        data: new Date('2024-05-21'),
        processadoData: 1,
        totalProcessado: 3,
      },
      {
        usuario: 'Paulo',
        data: new Date('2024-05-21'),
        processadoData: 1,
        totalProcessado: 5,
      },
      {
        usuario: 'Tereza',
        data: new Date('2024-05-21'),
        processadoData: 1,
        totalProcessado: 5,
      },
      {
        usuario: 'lola',
        data: new Date('2024-05-20'),
        processadoData: 3,
        totalProcessado: 9,
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
  getUsuarios(): Usuario[] {
    const dados = this.dadosSubject.value;
    const usuarios: Usuario[] = [];

    for (const dado of dados) {
      if (!usuarios.some(u => u.nome === dado.usuario)) {
        usuarios.push({ id: usuarios.length.toString(), nome: dado.usuario });
      }
    }

    return usuarios;
  }
}
