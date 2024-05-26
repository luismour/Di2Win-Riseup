import { Component, OnInit } from '@angular/core';
import { DadosDocumentoService } from '../../dados-documento-sintetico.service';
import { Usuario } from '../../usuario.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select-usuario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-usuario.component.html',
  styleUrl: './select-usuario.component.css'
})
export class SelectUsuarioComponent implements OnInit {
  usuarios: Usuario[] = []; // Array para armazenar os usuários

  constructor(private dadosService: DadosDocumentoService) {}

  ngOnInit(): void {
    // Ao inicializar o componente, obter os usuários do serviço
    this.usuarios = this.dadosService.getUsuarios();
  }
}
