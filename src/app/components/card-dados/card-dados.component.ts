import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-card-dados',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './card-dados.component.html',
  styleUrl: './card-dados.component.css'
})
export class CardDadosComponent {
  @Input() qtd: number = 0;
  @Input() legenda: string = '';
}
