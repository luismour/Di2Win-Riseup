import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroService } from '../../../services/filtro.service';

@Component({
  selector: 'app-select-usuario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-usuario.component.html',
  styleUrl: './select-usuario.component.css',
})
export class SelectUsuarioComponent {
  constructor(private filtroService: FiltroService) {}

  onUserSearch(value: string) {
    this.filtroService.setFiltro(value);
  }
}
