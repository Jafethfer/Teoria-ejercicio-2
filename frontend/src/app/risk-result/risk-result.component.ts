import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-risk-result',
  templateUrl: './risk-result.component.html',
  styleUrls: ['./risk-result.component.css']
})
export class RiskResultComponent implements OnInit {

  faHeart = faHeart;

  constructor() { }

  ngOnInit(): void {
  }

}
