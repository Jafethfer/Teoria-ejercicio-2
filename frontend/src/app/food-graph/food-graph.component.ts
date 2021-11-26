import { Component, OnInit, ViewChild } from '@angular/core';
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
  selector: 'app-food-graph',
  templateUrl: './food-graph.component.html',
  styleUrls: ['./food-graph.component.css']
})
export class FoodGraphComponent implements OnInit {
  
  labels = ["Queso","Huevo","Higado","Pollo","Sardinas"];

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
      labels: this.labels,
      datasets: [{
          label: 'Contenido de colesterol',
          backgroundColor: 'rgb(25, 99, 132)',
          borderColor: 'rgb(25, 99, 132)',
          data: [5,3,2,4,1],
      }]
  };

  const myChart = new Chart("myChar", {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                display: false
            },
        }
    },
}
  );
  }

}
