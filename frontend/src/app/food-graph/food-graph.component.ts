import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
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
export class FoodGraphComponent implements OnChanges,OnInit {

  @Input() graphedFood:Array<any> = []

  labels:Array<any> = [];
  graphData:Array<any> = []

  data:any
  myChart:any

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

    for(let index in this.graphedFood){
      if(this.graphedFood[index].status=='active'){
        this.labels.push(this.graphedFood[index].alimento)
        this.graphData.push(this.graphedFood[index].anual)
      }
    }

    this.data = {
      labels: this.labels,
      datasets: [{
          label: 'Contenido de colesterol',
          backgroundColor: 'rgb(25, 99, 132)',
          borderColor: 'rgb(25, 99, 132)',
          data: this.graphData,
      }]
    };

    this.myChart = new Chart("myChar", {
      type: 'bar',
      data: this.data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            display: false
          },
        }
      },
    });


  }

  ngOnChanges(changes:SimpleChanges):void{
    if(this.myChart==undefined){
      return
    }
    this.myChart.destroy()
    this.graphData = []
    this.labels = []
    for(let index in changes.graphedFood.currentValue.alimentos){
      if(changes.graphedFood.currentValue.alimentos[index].status=='active'){
        this.labels.push(changes.graphedFood.currentValue.alimentos[index].alimento)
        this.graphData.push(changes.graphedFood.currentValue.alimentos[index].anual)
        console.log(changes.graphedFood.currentValue.alimentos[index].anual)
      }
    }
    this.data = {
      labels: this.labels,
      datasets: [{
          label: 'Contenido de colesterol',
          backgroundColor: 'rgb(25, 99, 132)',
          borderColor: 'rgb(25, 99, 132)',
          data: this.graphData,
      }]
    };
    this.myChart = new Chart("myChar", {
      type: 'bar',
      data: this.data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            display: false
          },
        }
      },
    });

  }
}
