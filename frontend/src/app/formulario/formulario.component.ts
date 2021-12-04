import { RiesgoCardiacoService } from './../servicios/riesgo-cardiaco.service';
import { Component, OnInit } from '@angular/core';
import {faQuestionCircle} from '@fortawesome/free-regular-svg-icons'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  faQuestionCircle = faQuestionCircle
  formularioDatos = new FormGroup({
    Sexo: new FormControl(''),
    Edad: new FormControl(''),
    Colesterol: new FormControl(''),
    HDL: new FormControl(''),
    PresionS: new FormControl(''),
    PresionD: new FormControl(''),
    Diabetes: new FormControl(''),
    Fumador: new FormControl('')
  })
  @Output() resultsEvent = new EventEmitter<any>();


  constructor(private modalService:NgbModal,private riskService:RiesgoCardiacoService) { }

  ngOnInit(): void {
  }

  helpModal(longContent:any){
    this.modalService.open(longContent,{scrollable:true,size:'lg'})
  }

  Calcular(){
    let Diabetes = false
    let Fumador = false
    let Edad = this.formularioDatos.get('Edad')?.value
    let results = []
    let labels = []
    if(this.formularioDatos.get('Diabetes')?.value=='True'){
      Diabetes = true
    }
    if(this.formularioDatos.get('Fumador')?.value=='True'){
      Fumador = true
    }
    results.push(this.riskService.riesgoCardiaco(
                  this.formularioDatos.get('Sexo')?.value,
                  Edad,
                  this.formularioDatos.get('Colesterol')?.value,
                  this.formularioDatos.get('HDL')?.value,
                  this.formularioDatos.get('PresionS')?.value,
                  this.formularioDatos.get('PresionD')?.value,
                  Diabetes,
                  Fumador
                )*100)
    labels.push(Edad+10)
    Edad = Edad+20
    while(Edad<90){
      results.push(this.riskService.riesgoCardiaco(
        this.formularioDatos.get('Sexo')?.value,
        Edad,
        this.formularioDatos.get('Colesterol')?.value,
        this.formularioDatos.get('HDL')?.value,
        this.formularioDatos.get('PresionS')?.value,
        this.formularioDatos.get('PresionD')?.value,
        Diabetes,
        Fumador
      )*100)
      labels.push(Edad)
      Edad = Edad+10
    }
    this.resultsEvent.emit({results:results,labels:labels})
  }
}
