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

  /* EL VALOR ANUAL REPRESENTA UN PROMEDIO DE CONSUMO ANUAL EN GRAMOS DE COLESTEROL POR AÑO */
  alimentos = [
    {
      id: 1,
      alimento: 'Huevo',
      colesterol: 420,
      img: 'huevos.png',
      status: 'inactive',
      anual: 345*50/100*420/100
    },
    {
      id: 2,
      alimento: 'Higado',
      colesterol: 370,
      img: 'higado.png',
      status: 'inactive',
      anual: 250*52/100*370/100
    },
    {
      id: 3,
      alimento: 'Mayonesa',
      colesterol: 260,
      img: 'mayonesa.png',
      status: 'inactive',
      anual: 2000/100*260/100
    },
    {
      id: 4,
      alimento: 'Mantequilla',
      colesterol: 230,
      img: 'mantequilla.png',
      status: 'inactive',
      anual: 2.250/100*230/100
    },
    {
      id: 5,
      alimento: 'Calamares',
      colesterol: 220,
      img: 'calamares.png',
      status: 'inactive',
      anual: 2000/100*220/100
    },
    {
      id: 6,
      alimento: 'Leche en polvo',
      colesterol: 120,
      img: 'lechePolvo.jpg',
      status: 'inactive',
      anual: 250*52/100*120/100
    },
    {
      id: 7,
      alimento: 'Sardina',
      colesterol: 100,
      img: 'sardina.jpg',
      status: 'inactive',
      anual: 12000/100*100/100
    },
    {
      id: 8,
      alimento: 'Cordero',
      colesterol: 78,
      img: 'cordero.png',
      status: 'inactive',
      anual: 10000/100/78/100
    },
    {
      id: 9,
      alimento: 'Chocolate',
      colesterol: 77,
      img: 'chocolate.png',
      status: 'inactive',
      anual: 1000/100*77/100
    },
    {
      id: 10,
      alimento: 'Salchichas',
      colesterol: 72,
      img: 'salchichas.png',
      status: 'inactive',
      anual: 8600/100*72/100
    },
    {
      id: 11,
      alimento: 'Manteca',
      colesterol: 70,
      img: 'manteca.png',
      status: 'inactive',
      anual: 2000/100*70/100
    },
    {
      id: 12,
      alimento: 'Morcilla',
      colesterol: 70,
      img: 'morcilla.jpg',
      status: 'inactive',
      anual: 1000/100*70/100
    },
    {
      id: 13,
      alimento: 'Jamon',
      colesterol: 70,
      img: 'jamon.jpg',
      status: 'inactive',
      anual: 5000/100*70/100
    },
  ]

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    if (localStorage.getItem('alimentos') == null) {
      localStorage.setItem('alimentos', JSON.stringify(this.alimentos));
    }
    else{
      this.alimentos = JSON.parse(localStorage.getItem('alimentos')+'');
    }
  }

  open(content:any){
    this.modalService.open(content, {size: 'xl'});
  }

  saveFood(event:any){
    for(let index in this.alimentos){
      if(this.alimentos[index].alimento==event){
        this.alimentos[index].status='active'
        localStorage.setItem('alimentos', JSON.stringify(this.alimentos));
      }
    }
    this.foodEvent.emit({'alimentos':this.alimentos})
  }

  deleteFood(event:any){
    for(let index in this.alimentos){
      if(this.alimentos[index].alimento==event){
        this.alimentos[index].status='inactive'
        localStorage.setItem('alimentos', JSON.stringify(this.alimentos));
      }
    }
    let newArray = new Array
    newArray = this.alimentos
    this.foodEvent.emit({'alimentos':this.alimentos})
  }

}
