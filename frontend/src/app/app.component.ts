import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { RiskGraphComponent } from './risk-graph/risk-graph.component';
import { DecimalPipe } from '@angular/common';
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

  getGraphData(results:any){
    this.graphData = results.results
    this.labelsData = results.labels
    this.riskResult = this.graphData[0]
  }
}
