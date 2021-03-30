import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevunueComponent } from './revunue.component';

describe('RevunueComponent', () => {
  let component: RevunueComponent;
  let fixture: ComponentFixture<RevunueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevunueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevunueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
