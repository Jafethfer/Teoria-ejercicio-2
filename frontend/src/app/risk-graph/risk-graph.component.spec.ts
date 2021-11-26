import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskGraphComponent } from './risk-graph.component';

describe('RiskGraphComponent', () => {
  let component: RiskGraphComponent;
  let fixture: ComponentFixture<RiskGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
