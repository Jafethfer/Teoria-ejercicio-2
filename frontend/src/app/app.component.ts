import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';
  graphData = []
  labelsData = []
  riskResult:any
  graphFood:any = {}

  getGraphData(results:any){
    this.graphData = results.results
    this.labelsData = results.labels
    this.riskResult = this.graphData[0]
  }

  getSelectedFood(event:any){
    this.graphFood = event
  }
}
