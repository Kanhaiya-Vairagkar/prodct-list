import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayBinding2Component } from './two-way-binding2.component';

describe('TwoWayBinding2Component', () => {
  let component: TwoWayBinding2Component;
  let fixture: ComponentFixture<TwoWayBinding2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayBinding2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWayBinding2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
