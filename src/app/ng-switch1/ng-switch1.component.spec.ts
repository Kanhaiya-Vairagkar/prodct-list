import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitch1Component } from './ng-switch1.component';

describe('NgSwitch1Component', () => {
  let component: NgSwitch1Component;
  let fixture: ComponentFixture<NgSwitch1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSwitch1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgSwitch1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
