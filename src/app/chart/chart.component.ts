import { Component } from '@angular/core';
import { MatLabel } from '@angular/material/form-field';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent {
  data: any;
  options: any;

  constructor() {
    this.data = {
      labels: ['CPF', 'Contratos', 'CNH', 'NFS'],
      datasets: [
        {
          label: '',
          data: [8000, 5750, 6750, 4500],
          backgroundColor: ['#A70368'],
          
        }
      ],
    };

    this.options = {
      scales: {
        y: {
          beginAtZero: true,
          suggestedMin: 0,
          suggestedMax: 10000,
          ticks: {
            stepSize: 2500,
          },
        },
      },
    };
  }
}
