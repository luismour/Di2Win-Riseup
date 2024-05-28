import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.css'
})
export class PieChartComponent {
  data: any;
  options: any;

  constructor() {
    const rawData = [8000, 5750, 6750, 4500];
    const total = rawData.reduce((sum, value) => sum + value, 0);
    const percentageData = rawData.map(value => ((value / total) * 100).toFixed(2));

    this.data = {
      labels: ['CPF', 'Contratos', 'CNH', 'NFS'],
      datasets: [
        {
          data: percentageData,
          backgroundColor: ['#A70368', '#FF6384', '#36A2EB', '#FFCE56']
        }
      ]
    };

    this.options = {
      plugins: {
        tooltip: {
          callbacks: {
            label: (tooltipItem: any) => {
              const dataIndex = tooltipItem.dataIndex;
              const label = tooltipItem.label;
              const value = this.data.datasets[0].data[dataIndex];
              return `${label}: ${value}%`;
            }
          }
        },
        legend: {
          display: true,
          position: 'right', // Posiciona a legenda à direita
          labels: {
            boxWidth: 20 // Define a largura da caixa de cor na legenda
          }
        }
      }
    };
  }
}