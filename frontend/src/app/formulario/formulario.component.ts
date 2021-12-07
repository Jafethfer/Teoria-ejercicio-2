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
    Sexo: new FormControl('m'),
    Edad: new FormControl(57),
    Colesterol: new FormControl(238),
    HDL: new FormControl(52),
    PresionS: new FormControl(150),
    PresionD: new FormControl(92),
    Diabetes: new FormControl('False'),
    Fumador: new FormControl('False')
  })
  @Output() resultsEvent = new EventEmitter<any>();


  historial:any = [];


  constructor(private modalService:NgbModal,private riskService:RiesgoCardiacoService) { }

  ngOnInit(): void {

    if(localStorage.getItem('historial') == null ){
      JSON.stringify(this.historial);
    }else{
      this.historial = JSON.parse(localStorage.getItem('historial')+'')

    }
    console.log(this.historial);

  }

  helpModal(longContent:any){
    this.modalService.open(longContent,{scrollable:true,size:'lg'})
  }

  Calcular(){
    let Diabetes = false
    let Fumador = false
    let Edad = this.formularioDatos.get('Edad')?.value
    let currentEdad = Edad
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
    this.historial.push({
      sexo: this.formularioDatos.get('Sexo')?.value,
      edad: currentEdad,
      colesterol: this.formularioDatos.get('Colesterol')?.value,
      HDL: this.formularioDatos.get('HDL')?.value,
      PresionS: this.formularioDatos.get('PresionS')?.value,
      PresionD: this.formularioDatos.get('PresionD')?.value,
      diabetes: Diabetes,
      fumador: Fumador,
      riesgo: results[0].toFixed(),
      fecha: (new Date).toLocaleDateString('en-US'),
      alimentos: JSON.parse(localStorage.getItem('alimentos')+'')
    }
    );

    localStorage.setItem('historial', JSON.stringify(this.historial));
  }
}
