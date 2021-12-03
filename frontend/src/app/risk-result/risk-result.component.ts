import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { RiesgoCardiacoService } from '../servicios/riesgo-cardiaco.service';

@Component({
  selector: 'app-risk-result',
  templateUrl: './risk-result.component.html',
  styleUrls: ['./risk-result.component.css']
})
export class RiskResultComponent implements OnInit {

  faHeart = faHeart;

  constructor(private riesgoServicio:RiesgoCardiacoService) { }

  ngOnInit(): void {
    console.log(this.riesgoServicio.riesgoCardiaco('m',57,238,52,150,92,false,false));
  }

}
