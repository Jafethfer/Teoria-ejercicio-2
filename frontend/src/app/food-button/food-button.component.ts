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
      colesterol: 500/5,
      img: 'huevos.png'
    },
    {
      alimento: 'Higado',
      colesterol: 370/5,
      img: 'higado.png.png'
    },
    {
      alimento: 'Mayonesa',
      colesterol: 260/5,
      img: 'huevo.png'
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
