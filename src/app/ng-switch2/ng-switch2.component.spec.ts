import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitch2Component } from './ng-switch2.component';

describe('NgSwitch2Component', () => {
  let component: NgSwitch2Component;
  let fixture: ComponentFixture<NgSwitch2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSwitch2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgSwitch2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
