import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-food-button',
  templateUrl: './food-button.component.html',
  styleUrls: ['./food-button.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class FoodButtonComponent implements OnInit {

  alimentos = [
    {
      alimento: 'Huevo',
      colesterol:420/5,
      img: 'huevos.png'
    },
    {
      alimento: 'Higado',
      colesterol: 370/5,
      img: 'higado.png'
    },
    {
      alimento: 'Mayonesa',
      colesterol: 260/5,
      img: 'mayonesa.png'
    },
    {
      alimento: 'Mantequilla',
      colesterol: 230/5,
      img: 'mantequilla.png'
    },
    {
      alimento: 'Calamares',
      colesterol: 220/5,
      img: 'calamares.png'
    },
    {
      alimento: 'Leche en polvo',
      colesterol: 120/5,
      img: 'lechePolvo.jpg'
    },
    {
      alimento: 'Sardina',
      colesterol: 100/5,
      img: 'sardina.jpg'
    },
    {
      alimento: 'Cordero',
      colesterol: 78/5,
      img: 'cordero.png'
    },
    {
      alimento: 'Chocolate',
      colesterol: 77/5,
      img: 'chocolate.png'
    },
    {
      alimento: 'Salchichas',
      colesterol: 72/5,
      img: 'salchichas.png'
    },
    {
      alimento: 'Manteca',
      colesterol: 70/5,
      img: 'manteca.png'
    },
    {
      alimento: 'Morcilla',
      colesterol: 70/5,
      img: 'morcilla.jpg'
    },
    {
      alimento: 'Jamon',
      colesterol: 70/5,
      img: 'jamon.jpg'
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
  }


}
