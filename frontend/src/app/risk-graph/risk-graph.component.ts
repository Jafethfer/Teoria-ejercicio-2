import { Component, OnInit } from '@angular/core';
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  // Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
} from 'chart.js';

@Component({
  selector: 'app-risk-graph',
  templateUrl: './risk-graph.component.html',
  styleUrls: ['./risk-graph.component.css']
})
export class RiskGraphComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    Chart.register(
      ArcElement,
      LineElement,
      BarElement,
      PointElement,
      BarController,
      BubbleController,
      DoughnutController,
      LineController,
      PieController,
      PolarAreaController,
      RadarController,
      ScatterController,
      CategoryScale,
      LinearScale,
      LogarithmicScale,
      RadialLinearScale,
      TimeScale,
      TimeSeriesScale,
      Filler,
      Legend,
      Title,
      Tooltip
    );

    const data = {
      labels: [50,60,70,80],
      datasets: [{
        label: 'Gráfico de riesgos hasta los 80 años',
        data: [14,20,25,20],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };

    const myChart = new Chart('riskChart',
    {
      type: 'line',
      data:data,
    })
  }



}
