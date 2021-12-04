import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
import { Input } from '@angular/core';

@Component({
  selector: 'app-risk-graph',
  templateUrl: './risk-graph.component.html',
  styleUrls: ['./risk-graph.component.css']
})
export class RiskGraphComponent implements OnChanges,OnInit {
  @Input() dataInput = []
  @Input() labelsInput = []

  data:any

  myChart:any;

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

    this.data = {
      labels: this.labelsInput,
      datasets: [{
        label: 'Gráfico de riesgos hasta los 80 años',
        data: this.dataInput,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };

    this.myChart = new Chart('riskChart',
    {
      type: 'line',
      data:this.data,
    })

  }

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.myChart==undefined){
      return
    }
    this.myChart.destroy()
    this.data = {
      labels: changes.labelsInput.currentValue,
      datasets: [{
        label: 'Gráfico de riesgos hasta los 80 años',
        data: changes.dataInput.currentValue,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };
    this.myChart = new Chart('riskChart',
    {
      type: 'line',
      data:this.data,
    })

  }




}
