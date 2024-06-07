import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroService } from '../../../services/filtro.service';

@Component({
  selector: 'app-select-documento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-documento.component.html',
  styleUrls: ['./select-documento.component.css'],
})
export class SelectDocumentoComponent {
  constructor(private filtroService: FiltroService) {}

  onUserSearch(value: string) {
    this.filtroService.setFiltro(value);
  }
}

