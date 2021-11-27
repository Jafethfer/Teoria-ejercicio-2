import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alimento-item',
  templateUrl: './alimento-item.component.html',
  styleUrls: ['./alimento-item.component.css']
})
export class AlimentoItemComponent implements OnInit {

  @Input()alimento:string = '';
  @Input()colesterol:number = 0;
  @Input()img:String = '';
  constructor() { }

  ngOnInit(): void {
  }

}
