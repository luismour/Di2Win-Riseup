import { Component } from '@angular/core';
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
  usuario: string;
  data: Date;
  processadoData: number;
  totalProcessado: number;
}

@Component({
  selector: 'app-tabela-sintetico',
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
  templateUrl: './tabela-sintetico.component.html',
  styleUrl: './tabela-sintetico.component.css'
})
export class TabelaSinteticoComponent {
  displayedColumns: string[] = ['usuario','data', 'processadoData','totalProcessado'];
  dataSource = new MatTableDataSource<DadosDocumento>([]);
  tiposDocumento = ['Relatório', 'Fatura', 'Contrato', 'Outros'];
  tipoDocumentoSelecionado: string = ''; // Inicialização com valor padrão
  dataSelecionada: Date | null = null; // Inicialização com valor nulo

  ngOnInit() {
    // Inicialize com dados fictícios ou carregue os dados de uma API
    this.dataSource.data = [
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
  }

  aplicarFiltro() {
    this.dataSource.filterPredicate = (
      data: DadosDocumento,
      filtro: string
    ) => {
      const matchFilter: boolean[] = [];
      const filtroArray = filtro.split('$');
      const colunas = [
        data.usuario.toLowerCase(),
        data.data.toDateString(),
        data.processadoData.toString(),
        data.totalProcessado.toString(),
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

}
