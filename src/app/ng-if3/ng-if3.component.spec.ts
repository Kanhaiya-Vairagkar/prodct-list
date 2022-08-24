import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIf3Component } from './ng-if3.component';

describe('NgIf3Component', () => {
  let component: NgIf3Component;
  let fixture: ComponentFixture<NgIf3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgIf3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgIf3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
