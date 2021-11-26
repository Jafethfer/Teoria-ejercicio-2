import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodButtonComponent } from './food-button.component';

describe('FoodButtonComponent', () => {
  let component: FoodButtonComponent;
  let fixture: ComponentFixture<FoodButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
