import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnChanges {
  @Input() rawData: number[] = [];
  @Input() labels: string[] = [];
  @Input() chartTitle: string = '';
  @Input() backgroundColors: string[] = ['#A70368', '#FF6384', '#36A2EB', '#FFCE56'];

  data: any;
  options: any;

  constructor() {
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
          position: 'right',
          labels: {
            boxWidth: 20
          }
        }
      }
    };
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['rawData'] || changes['labels'] || changes['backgroundColors']) {
      this.updateChartData();
    }
  }

  updateChartData() {
    const total = this.rawData.reduce((sum, value) => sum + value, 0);
    const percentageData = this.rawData.map(value => ((value / total) * 100).toFixed(2));

    this.data = {
      labels: this.labels,
      datasets: [
        {
          data: percentageData,
          backgroundColor: this.backgroundColors
        }
      ]
    };
  }
}
