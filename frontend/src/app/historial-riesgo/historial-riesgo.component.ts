import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-historial-riesgo',
  templateUrl: './historial-riesgo.component.html',
  styleUrls: ['./historial-riesgo.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class HistorialRiesgoComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  historial:any = [];

  ngOnInit(): void {
    if(localStorage.getItem('historial') != null){
      this.historial = JSON.parse(localStorage.getItem('historial')+'');
    }
    
  }

  open(content:any){
    if(localStorage.getItem('historial') != null){
      this.historial = JSON.parse(localStorage.getItem('historial')+'');
    }
    this.modalService.open(content, {size: 'xl'});
  }

}
