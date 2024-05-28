import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css'
})
export class LineChartComponent {
  data: any;
  options: any;

  constructor() {
    this.data = {
      labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'],
      datasets: [
        {
          label: 'Páginas processadas',
          data: [20000, 12500, 17500, 25000],
          backgroundColor: ['#A70368']
        }
      ],
    };

    this.options = {
      scales: {
        y: {
          beginAtZero: true,
          suggestedMin: 0,
          suggestedMax: 25000,
          ticks: {
            stepSize: 5000,
          },
        },
      },

    };
  }
}
