import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { BaixarBotaoSinteticoComponent } from '../../../../components/botoes/baixar-botao-sintetico/baixar-botao-sintetico.component';
import { SelectUsuarioComponent } from '../../../../components/botoes/select-usuario/select-usuario.component';
import { SelectDateComponent } from '../../../../components/botoes/select-date/select-date.component';
import { DadosDocumento } from '../../../../dados-documento-sintetico.model';
import {TabelaSinteticoComponent} from '../../../../components/tabela-sintetico/tabela-sintetico.component';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-relatorio-sintetico',
  standalone: true,
  imports: [
    TabelaSinteticoComponent,
    BaixarBotaoSinteticoComponent,
    SelectUsuarioComponent,
    CommonModule,
    FormsModule,
    MatPaginator,
    MatPaginatorModule,
    SelectDateComponent,
    RouterLink,
  ],
  templateUrl: './relatorio-sintetico.component.html',
  styleUrls: ['./relatorio-sintetico.component.css'],
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
export class RelatorioSinteticoComponent  {
  mostrarConteudo: boolean = true;
  toggleConteudo() {
    this.mostrarConteudo = !this.mostrarConteudo;
  }

  dataSource = new MatTableDataSource<DadosDocumento>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  
}
