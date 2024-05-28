import { Component } from '@angular/core';
import { ChartComponent } from '../../../../components/chart/chart.component';
import { PieChartComponent } from '../../../../components/pie-chart/pie-chart.component';
import { LineChartComponent } from '../../../../components/line-chart/line-chart.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ChartComponent, PieChartComponent, LineChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
