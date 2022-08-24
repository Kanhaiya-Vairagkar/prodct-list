import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFor3Component } from './ng-for3.component';

describe('NgFor3Component', () => {
  let component: NgFor3Component;
  let fixture: ComponentFixture<NgFor3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgFor3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgFor3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
