import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import { DadosDocumentoService } from '../../dados-documento-sintetico.service';
import { DadosDocumento } from '../../dados-documento-sintetico.model';
import { FiltroService } from '../../filtro.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tabela-sintetico',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
  ],
  templateUrl: './tabela-sintetico.component.html',
  styleUrls: ['./tabela-sintetico.component.css']
})
export class TabelaSinteticoComponent implements OnInit, AfterViewInit, OnDestroy {
  displayedColumns: string[] = ['usuario', 'data', 'processadoData', 'totalProcessado'];
  dataSource: MatTableDataSource<DadosDocumento>;

  @ViewChild(MatSort) sort!: MatSort;

  private filtroSubscription: Subscription | null = null;

  constructor(private dadosService: DadosDocumentoService, private filtroService: FiltroService) {
    this.dataSource = new MatTableDataSource<DadosDocumento>([]);
    this.dataSource.filterPredicate = (data: DadosDocumento, filter: string) => {
      return data.usuario.toLowerCase().includes(filter.toLowerCase());
    };
  }

  ngOnInit(): void {
    this.dataSource.data = this.dadosService.getDados();
    this.filtroSubscription = this.filtroService.filtro$.subscribe(filtro => {
      this.dataSource.filter = filtro.trim().toLowerCase();
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy() {
    if (this.filtroSubscription) {
      this.filtroSubscription.unsubscribe();
    }
  }
}
