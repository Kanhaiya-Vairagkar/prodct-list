import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIf4Component } from './ng-if4.component';

describe('NgIf4Component', () => {
  let component: NgIf4Component;
  let fixture: ComponentFixture<NgIf4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgIf4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgIf4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
