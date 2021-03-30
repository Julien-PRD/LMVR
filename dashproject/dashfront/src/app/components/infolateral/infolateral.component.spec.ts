import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoLateralComponent } from './infolateral.component';

describe('InfoLateralComponent', () => {
  let component: InfoLateralComponent;
  let fixture: ComponentFixture<InfoLateralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoLateralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoLateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
