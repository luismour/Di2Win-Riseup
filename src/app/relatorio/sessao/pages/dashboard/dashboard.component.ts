import { Component } from '@angular/core';
import { LineChartComponent } from '../../../../components/charts/line-chart/line-chart.component';
import { PieChartComponent } from '../../../../components/charts/pie-chart/pie-chart.component';
import { ChartComponent } from '../../../../components/charts/chart/chart.component';
import { CardDadosComponent } from '../../../../components/card-dados/card-dados.component';
import { StackedChartComponent } from '../../../../components/charts/stacked-chart/stacked-chart.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ChartComponent, PieChartComponent, LineChartComponent,CardDadosComponent, StackedChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
