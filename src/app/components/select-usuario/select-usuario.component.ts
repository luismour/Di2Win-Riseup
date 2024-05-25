import { Component } from '@angular/core';

@Component({
  selector: 'app-select-usuario',
  standalone: true,
  imports: [],
  templateUrl: './select-usuario.component.html',
  styleUrl: './select-usuario.component.css'
})
export class SelectUsuarioComponent {
  selectedType: string | null = null;

  onDataSelectorChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedType = selectElement.value;
  }
}
