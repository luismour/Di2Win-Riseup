import { Component } from '@angular/core';

@Component({
  selector: 'app-select-documento',
  standalone: true,
  templateUrl: './select-documento.component.html',
  styleUrls: ['./select-documento.component.css'],
})
export class SelectDocumentoComponent {
  selectedType: string | null = null;

  onDataSelectorChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedType = selectElement.value;
  }
}

