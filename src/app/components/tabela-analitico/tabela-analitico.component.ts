import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import { DadosDocumentoService } from '../../dados-documento-analitico.service';
import { DadosDocumento } from '../../dados-documento-analitico.model';
import { FiltroService } from '../../filtro.service';
import { Subscription } from 'rxjs';
import { FiltroData } from '../../filtroDate.service';


@Component({
  selector: 'app-tabela-analitico',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginator,
    MatPaginatorModule,
  ],
  templateUrl: './tabela-analitico.component.html',
  styleUrl: './tabela-analitico.component.css'
})
export class TabelaAnaliticoComponent implements OnInit, AfterViewInit, OnDestroy{
  displayedColumns: string[] = ['tipoDocumento', 'data', 'quantidadePaginas'];
  dataSource = new MatTableDataSource<DadosDocumento>([]);

  @ViewChild(MatSort) sort!: MatSort;

  private filtroSubscription: Subscription | null = null;

  constructor(private dadosService: DadosDocumentoService, private filtroService: FiltroService, private filtroDateService: FiltroData) {
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

    this.filtroDateService.filtro$.subscribe(filtro => {
      if (filtro && filtro.includes(' - ')) {
        const [startDateStr, endDateStr] = filtro.split(' - ');
        const startDate = this.convertStringToDate(startDateStr);
        const endDate = this.convertStringToDate(endDateStr);

        this.dataSource.filterPredicate = (data: DadosDocumento, filter: string) => {
          return data.data >= startDate && data.data <= endDate;
        };
        this.dataSource.filter = filtro;
      }
    });
  }

  convertStringToDate(dateStr: string): Date {
    const [day, month, year] = dateStr.split('/');
    return new Date(`${year}-${month}-${day}`);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy() {
    if (this.filtroSubscription) {
      this.filtroSubscription.unsubscribe();
    }
  }


  @ViewChild(MatPaginator) paginator!: MatPaginator;
}
