import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngclass2Component } from './ngclass2.component';

describe('Ngclass2Component', () => {
  let component: Ngclass2Component;
  let fixture: ComponentFixture<Ngclass2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ngclass2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ngclass2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
