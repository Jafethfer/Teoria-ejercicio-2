import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { RiskResultComponent } from './risk-result/risk-result.component';
import { FoodGraphComponent } from './food-graph/food-graph.component';
import { RiskGraphComponent } from './risk-graph/risk-graph.component';
import { FoodButtonComponent } from './food-button/food-button.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AlimentoItemComponent } from './alimento-item/alimento-item.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HistorialRiesgoComponent } from './historial-riesgo/historial-riesgo.component'

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    RiskResultComponent,
    FoodGraphComponent,
    RiskGraphComponent,
    FoodButtonComponent,
    AlimentoItemComponent,
    HistorialRiesgoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
