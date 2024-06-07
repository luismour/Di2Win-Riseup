// src/app/dados-documento.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DadosDocumento } from '../dados-documento-analitico.model'; // Certifique-se de que a interface está em um arquivo separado

@Injectable({
  providedIn: 'root',
})
export class DadosDocumentoService {
  private dadosSubject = new BehaviorSubject<DadosDocumento[]>([]);
  dados$ = this.dadosSubject.asObservable();

  constructor() {
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
      {
        tipoDocumento: 'Boleto',
        data: new Date('2024-06-01'),
        quantidadePaginas: 3,
      },

      {
        tipoDocumento: 'Contrato',
        data: new Date('2024-06-02'),
        quantidadePaginas: 7,
      },

      {
        tipoDocumento: 'Atestado',
        data: new Date('2024-06-03'),
        quantidadePaginas: 4,
      },

      {
        tipoDocumento: 'Carta',
        data: new Date('2024-06-04'),
        quantidadePaginas: 2,
      },

      {
        tipoDocumento: 'Nota Fiscal',
        data: new Date('2024-06-05'),
        quantidadePaginas: 1,
      },

      {
        tipoDocumento: 'Procuração',
        data: new Date('2024-06-06'),
        quantidadePaginas: 3,
      },

      {
        tipoDocumento: 'Recibo',
        data: new Date('2024-06-07'),
        quantidadePaginas: 1,
      },

      {
        tipoDocumento: 'Ofício',
        data: new Date('2024-06-08'),
        quantidadePaginas: 2,
      },

      {
        tipoDocumento: 'Declaração',
        data: new Date('2024-06-09'),
        quantidadePaginas: 5,
      },

      {
        tipoDocumento: 'Ordem de Serviço',
        data: new Date('2024-06-10'),
        quantidadePaginas: 6,
      },

      {
        tipoDocumento: 'Memorando',
        data: new Date('2024-06-11'),
        quantidadePaginas: 3,
      },

      {
        tipoDocumento: 'Laudo',
        data: new Date('2024-06-12'),
        quantidadePaginas: 4,
      },

      {
        tipoDocumento: 'Requerimento',
        data: new Date('2024-06-13'),
        quantidadePaginas: 2,
      },

      {
        tipoDocumento: 'Termo de Compromisso',
        data: new Date('2024-06-14'),
        quantidadePaginas: 1,
      },

      {
        tipoDocumento: 'Autorização',
        data: new Date('2024-06-15'),
        quantidadePaginas: 3,
      },

      {
        tipoDocumento: 'Contracheque',
        data: new Date('2024-06-16'),
        quantidadePaginas: 2,
      },

      {
        tipoDocumento: 'Ata',
        data: new Date('2024-06-17'),
        quantidadePaginas: 1,
      },

      {
        tipoDocumento: 'Recibo de Aluguel',
        data: new Date('2024-06-18'),
        quantidadePaginas: 3,
      },

      {
        tipoDocumento: 'Certificado',
        data: new Date('2024-06-19'),
        quantidadePaginas: 4,
      },

      {
        tipoDocumento: 'Memorial Descritivo',
        data: new Date('2024-06-20'),
        quantidadePaginas: 2,
      },

      {
        tipoDocumento: 'Anotação',
        data: new Date('2024-06-21'),
        quantidadePaginas: 1,
      },

      {
        tipoDocumento: 'Comprovante de Renda',
        data: new Date('2024-06-22'),
        quantidadePaginas: 3,
      },

      {
        tipoDocumento: 'Despacho',
        data: new Date('2024-06-23'),
        quantidadePaginas: 2,
      },

      {
        tipoDocumento: 'Memória de Cálculo',
        data: new Date('2024-06-24'),
        quantidadePaginas: 4,
      },

      {
        tipoDocumento: 'Ordem de Compra',
        data: new Date('2024-06-25'),
        quantidadePaginas: 3,
      },

      {
        tipoDocumento: 'Inventário',
        data: new Date('2024-06-26'),
        quantidadePaginas: 5,
      },

      {
        tipoDocumento: 'Relatório Técnico',
        data: new Date('2024-06-27'),
        quantidadePaginas: 2,
      },

      {
        tipoDocumento: 'Requerimento de Licença',
        data: new Date('2024-06-28'),
        quantidadePaginas: 1,
      },

      {
        tipoDocumento: 'Testamento',
        data: new Date('2024-06-29'),
        quantidadePaginas: 3,
      },

      {
        tipoDocumento: 'Curriculum Vitae',
        data: new Date('2024-06-30'),
        quantidadePaginas: 2,
      },

      {
        tipoDocumento: 'Autorização de Viagem',
        data: new Date('2024-07-01'),
        quantidadePaginas: 1,
      },

      {
        tipoDocumento: 'Requerimento de Aposentadoria',
        data: new Date('2024-07-02'),
        quantidadePaginas: 4,
      },

      {
        tipoDocumento: 'Declaração de Imposto de Renda',
        data: new Date('2024-07-03'),
        quantidadePaginas: 5,
      },

      {
        tipoDocumento: 'Holerite',
        data: new Date('2024-07-04'),
        quantidadePaginas: 2,
      },

      {
        tipoDocumento: 'Atestado Médico',
        data: new Date('2024-07-05'),
        quantidadePaginas: 3,
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
