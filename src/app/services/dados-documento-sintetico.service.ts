// src/app/dados-documento.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DadosDocumento } from './dados-documento-sintetico.model';
import { Usuario } from '../usuario.model';

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
      {
        usuario: 'Will',
        data: new Date('2024-05-05'),
        processadoData: 3,
        totalProcessado: 9,
      },
      {
        usuario: 'Sofia',
        data: new Date('2024-05-10'),
        processadoData: 3,
        totalProcessado: 9,
      },
      {
        usuario: 'Ricardo',
        data: new Date('2024-06-01'),
        processadoData: 2,
        totalProcessado: 6,
      },

      {
        usuario: 'Camila',
        data: new Date('2024-06-02'),
        processadoData: 1,
        totalProcessado: 4,
      },

      {
        usuario: 'Gabriel',
        data: new Date('2024-06-03'),
        processadoData: 3,
        totalProcessado: 7,
      },

      {
        usuario: 'Ana',
        data: new Date('2024-06-04'),
        processadoData: 2,
        totalProcessado: 5,
      },

      {
        usuario: 'Pedro',
        data: new Date('2024-06-05'),
        processadoData: 1,
        totalProcessado: 3,
      },

      {
        usuario: 'Mariana',
        data: new Date('2024-06-06'),
        processadoData: 4,
        totalProcessado: 10,
      },

      {
        usuario: 'João',
        data: new Date('2024-06-07'),
        processadoData: 3,
        totalProcessado: 8,
      },

      {
        usuario: 'Laura',
        data: new Date('2024-06-08'),
        processadoData: 2,
        totalProcessado: 6,
      },

      {
        usuario: 'Lucas',
        data: new Date('2024-06-09'),
        processadoData: 1,
        totalProcessado: 4,
      },

      {
        usuario: 'Isabela',
        data: new Date('2024-06-10'),
        processadoData: 3,
        totalProcessado: 7,
      },

      {
        usuario: 'Diego',
        data: new Date('2024-06-11'),
        processadoData: 2,
        totalProcessado: 5,
      },

      {
        usuario: 'Beatriz',
        data: new Date('2024-06-12'),
        processadoData: 1,
        totalProcessado: 3,
      },

      {
        usuario: 'Rodrigo',
        data: new Date('2024-06-13'),
        processadoData: 4,
        totalProcessado: 10,
      },

      {
        usuario: 'Fernanda',
        data: new Date('2024-06-14'),
        processadoData: 3,
        totalProcessado: 8,
      },

      {
        usuario: 'Vitor',
        data: new Date('2024-06-15'),
        processadoData: 2,
        totalProcessado: 6,
      },

      {
        usuario: 'Helena',
        data: new Date('2024-06-16'),
        processadoData: 1,
        totalProcessado: 4,
      },

      {
        usuario: 'Gustavo',
        data: new Date('2024-06-17'),
        processadoData: 3,
        totalProcessado: 7,
      },

      {
        usuario: 'Leticia',
        data: new Date('2024-06-18'),
        processadoData: 2,
        totalProcessado: 5,
      },

      {
        usuario: 'Mateus',
        data: new Date('2024-06-19'),
        processadoData: 1,
        totalProcessado: 3,
      },

      {
        usuario: 'Raquel',
        data: new Date('2024-06-20'),
        processadoData: 4,
        totalProcessado: 10,
      },

      {
        usuario: 'Eduardo',
        data: new Date('2024-06-21'),
        processadoData: 3,
        totalProcessado: 8,
      },

      {
        usuario: 'Juliana',
        data: new Date('2024-06-22'),
        processadoData: 2,
        totalProcessado: 6,
      },

      {
        usuario: 'Marcelo',
        data: new Date('2024-06-23'),
        processadoData: 1,
        totalProcessado: 4,
      },

      {
        usuario: 'Carolina',
        data: new Date('2024-06-24'),
        processadoData: 3,
        totalProcessado: 7,
      },

      {
        usuario: 'Thiago',
        data: new Date('2024-06-25'),
        processadoData: 2,
        totalProcessado: 5,
      },

      {
        usuario: 'Patricia',
        data: new Date('2024-06-26'),
        processadoData: 1,
        totalProcessado: 3,
      },

      {
        usuario: 'Marcos',
        data: new Date('2024-06-27'),
        processadoData: 4,
        totalProcessado: 10,
      },

      {
        usuario: 'Jessica',
        data: new Date('2024-06-28'),
        processadoData: 3,
        totalProcessado: 8,
      },

      {
        usuario: 'Fábio',
        data: new Date('2024-06-29'),
        processadoData: 2,
        totalProcessado: 6,
      },

      {
        usuario: 'Renata',
        data: new Date('2024-06-30'),
        processadoData: 1,
        totalProcessado: 4,
      },

      {
        usuario: 'Alexandre',
        data: new Date('2024-07-01'),
        processadoData: 3,
        totalProcessado: 7,
      },

      {
        usuario: 'Natalia',
        data: new Date('2024-07-02'),
        processadoData: 2,
        totalProcessado: 5,
      },

      {
        usuario: 'Vinicius',
        data: new Date('2024-07-03'),
        processadoData: 1,
        totalProcessado: 3,
      },

      {
        usuario: 'Julio',
        data: new Date('2024-07-04'),
        processadoData: 4,
        totalProcessado: 10,
      },

      {
        usuario: 'Amanda',
        data: new Date('2024-07-05'),
        processadoData: 3,
        totalProcessado: 8,
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
      if (!usuarios.some((u) => u.nome === dado.usuario)) {
        usuarios.push({ id: usuarios.length.toString(), nome: dado.usuario });
      }
    }

    return usuarios;
  }
}
