import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialRiesgoComponent } from './historial-riesgo.component';

describe('HistorialRiesgoComponent', () => {
  let component: HistorialRiesgoComponent;
  let fixture: ComponentFixture<HistorialRiesgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialRiesgoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialRiesgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
