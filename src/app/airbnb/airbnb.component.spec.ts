import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirbnbComponent } from './airbnb.component';

describe('AirbnbComponent', () => {
  let component: AirbnbComponent;
  let fixture: ComponentFixture<AirbnbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirbnbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirbnbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
