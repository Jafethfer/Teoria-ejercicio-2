import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-food-button',
  templateUrl: './food-button.component.html',
  styleUrls: ['./food-button.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class FoodButtonComponent implements OnInit {

  @Output() foodEvent = new EventEmitter()

  alimentos = [
    {
      alimento: 'Huevo',
      colesterol:420/5,
      img: 'huevos.png',
      status: 'inactive'
    },
    {
      alimento: 'Higado',
      colesterol: 370/5,
      img: 'higado.png',
      status: 'inactive'
    },
    {
      alimento: 'Mayonesa',
      colesterol: 260/5,
      img: 'mayonesa.png',
      status: 'inactive'
    },
    {
      alimento: 'Mantequilla',
      colesterol: 230/5,
      img: 'mantequilla.png',
      status: 'inactive'
    },
    {
      alimento: 'Calamares',
      colesterol: 220/5,
      img: 'calamares.png',
      status: 'inactive'
    },
    {
      alimento: 'Leche en polvo',
      colesterol: 120/5,
      img: 'lechePolvo.jpg',
      status: 'inactive'
    },
    {
      alimento: 'Sardina',
      colesterol: 100/5,
      img: 'sardina.jpg',
      status: 'inactive'
    },
    {
      alimento: 'Cordero',
      colesterol: 78/5,
      img: 'cordero.png',
      status: 'inactive'
    },
    {
      alimento: 'Chocolate',
      colesterol: 77/5,
      img: 'chocolate.png',
      status: 'inactive'
    },
    {
      alimento: 'Salchichas',
      colesterol: 72/5,
      img: 'salchichas.png',
      status: 'inactive'
    },
    {
      alimento: 'Manteca',
      colesterol: 70/5,
      img: 'manteca.png',
      status: 'inactive'
    },
    {
      alimento: 'Morcilla',
      colesterol: 70/5,
      img: 'morcilla.jpg',
      status: 'inactive'
    },
    {
      alimento: 'Jamon',
      colesterol: 70/5,
      img: 'jamon.jpg',
      status: 'inactive'
    },
  ]

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
  }

  open(content:any){
    this.modalService.open(content, {size: 'xl'});
    console.log(this.alimentos)
  }

  saveFood(event:any){
    for(let index in this.alimentos){
      if(this.alimentos[index].alimento==event){
        this.alimentos[index].status='active'
      }
    }
    this.foodEvent.emit(this.alimentos)
  }

  deleteFood(event:any){
    for(let index in this.alimentos){
      if(this.alimentos[index].alimento==event){
        this.alimentos[index].status='inactive'
      }
    }
  }


}
