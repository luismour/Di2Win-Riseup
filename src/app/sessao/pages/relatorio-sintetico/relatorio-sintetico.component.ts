import { Component } from '@angular/core';
import {SelectDocumentoComponent} from '../../../components/select-documento/select-documento.component'

@Component({
  selector: 'app-relatorio-sintetico',
  standalone: true,
  imports: [SelectDocumentoComponent],
  templateUrl: './relatorio-sintetico.component.html',
  styleUrl: './relatorio-sintetico.component.css'
})
export class RelatorioSinteticoComponent {

}
