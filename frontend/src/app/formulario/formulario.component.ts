import { Component, OnInit } from '@angular/core';
import {faQuestionCircle} from '@fortawesome/free-regular-svg-icons'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  faQuestionCircle = faQuestionCircle
  constructor(private modalService:NgbModal) { }

  ngOnInit(): void {
  }

  helpModal(longContent:any){
    this.modalService.open(longContent,{scrollable:true,size:'lg'})
  }
}
