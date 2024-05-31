import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import { DadosDocumentoService } from '../../dados-documento-analitico.service';
import { DadosDocumento } from '../../dados-documento-analitico.model';
import { FiltroService } from '../../filtro.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-tabela-analitico',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
  ],
  templateUrl: './tabela-analitico.component.html',
  styleUrl: './tabela-analitico.component.css'
})
export class TabelaAnaliticoComponent implements OnInit, AfterViewInit, OnDestroy{
  displayedColumns: string[] = ['tipoDocumento', 'data', 'quantidadePaginas'];
  dataSource = new MatTableDataSource<DadosDocumento>([]);

  @ViewChild(MatSort) sort!: MatSort;

  private filtroSubscription: Subscription | null = null;

  constructor(private dadosService: DadosDocumentoService, private filtroService: FiltroService) {
    this.dataSource = new MatTableDataSource<DadosDocumento>([]);
    this.dataSource.filterPredicate = (data: DadosDocumento, filter: string) => {
      return data.tipoDocumento.toLowerCase().includes(filter.toLowerCase());
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
