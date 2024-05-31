import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { TabelaAnaliticoComponent } from '../../../../components/tabela-analitico/tabela-analitico.component';
import { SelectDocumentoComponent } from '../../../../components/botoes/select-documento/select-documento.component';
import { SelectDateComponent } from '../../../../components/botoes/select-date/select-date.component';
import { BaixarBotaoAnaliticoComponent } from '../../../../components/botoes/baixar-botao-analitico/baixar-botao-analitico.component';
import { DadosDocumento } from '../../../../dados-documento-analitico.model';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-relatorio-analitico',
  standalone: true,
  imports: [
    SelectDocumentoComponent,
    TabelaAnaliticoComponent,
    SelectDateComponent,
    BaixarBotaoAnaliticoComponent,
    CommonModule,
    FormsModule,
    MatPaginator,
    MatPaginatorModule,
    MatTableModule,
    RouterLink,
  ],
  templateUrl: './relatorio-analitico.component.html',
  styleUrls: ['./relatorio-analitico.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate(500)
      ]),
      transition(':leave', [
        animate(500, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class RelatorioAnaliticoComponent {
  mostrarConteudo: boolean = true;

  toggleConteudo() {
    this.mostrarConteudo = !this.mostrarConteudo;
  }

  dataSource = new MatTableDataSource<DadosDocumento>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    // Conectar o paginator ao dataSource após a visualização ser inicializada
    this.dataSource.paginator = this.paginator;
  }
}
