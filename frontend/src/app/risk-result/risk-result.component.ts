import { Component, Input, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { RiesgoCardiacoService } from '../servicios/riesgo-cardiaco.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-risk-result',
  templateUrl: './risk-result.component.html',
  styleUrls: ['./risk-result.component.css']
})
export class RiskResultComponent implements OnInit {
  @Input() riskResult = 0
  faHeart = faHeart;
 
  constructor(private riesgoServicio:RiesgoCardiacoService) { }

  ngOnInit(): void {

    this.riskResult = Math.round(this.riesgoServicio.riesgoCardiaco('m',57,238,52,150,92,false,false)*100);
  }

}
