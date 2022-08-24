import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdctListComponent } from './prodct-list.component';

describe('ProdctListComponent', () => {
  let component: ProdctListComponent;
  let fixture: ComponentFixture<ProdctListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdctListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdctListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
