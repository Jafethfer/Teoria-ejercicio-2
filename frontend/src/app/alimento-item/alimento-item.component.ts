import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-alimento-item',
  templateUrl: './alimento-item.component.html',
  styleUrls: ['./alimento-item.component.css']
})
export class AlimentoItemComponent implements OnInit {
  @Input() statusClass=''
  @Input()alimento:string = '';
  @Input()colesterol:number = 0;
  @Input()img:String = '';
  @Output() selectedEvent = new EventEmitter()
  @Output() deleteEvent = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  SelectedFood(alimento:string){
    if(this.statusClass=='inactive'){
      this.selectedEvent.emit(alimento)
      this.statusClass='active'
    }else{
      this.statusClass='inactive'
      this.deleteEvent.emit(alimento)
    }
  }

}
