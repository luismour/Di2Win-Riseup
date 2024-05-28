import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-stacked-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './stacked-chart.component.html',
  styleUrls: ['./stacked-chart.component.css']
})
export class StackedChartComponent {
  data: any;
  options: any;

  constructor() {
    const labels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'];
    const rawData = [
      [2995, 2580, 4060, 4180,5147],
      [985, 2840, 2630, 2050,2703]
    ];

    const datasetLabels = ['Ativos', 'Inativos'];
    const backgroundColors = ['#357DED','#A70368'];

    const datasets = rawData.map((data, index) => ({
      label: datasetLabels[index],
      data,
      backgroundColor: backgroundColors[index % backgroundColors.length]
    }));

    this.data = {
      labels,
      datasets
    };

    this.options = {
      plugins: {
        tooltip: {
          callbacks: {
            label: (tooltipItem: any) => {
              const dataIndex = tooltipItem.dataIndex;
              const datasetIndex = tooltipItem.datasetIndex;
              const label = this.data.labels[dataIndex];
              const value = this.data.datasets[datasetIndex].data[dataIndex];
              return `${label}: ${value}`;
            }
          }
        },
        legend: {
          display: true,
          position: 'right',
          labels: {
            boxWidth: 20
          }
        }
      },
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      }
    };
  }
}
