import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  template: `
  <!-- If-else in ng-if -->
  <h1 *ngIf="condition;else elseBlock" > 
    kanhaiya 
  </h1>
 <ng-template #elseBlock>
  <h1>
    Name is Hidden
  </h1>
 </ng-template>
  ` ,
  styles: [`
  
  
  `]
})
export class NgIfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
public condition = true;
// public condition1 = true;
}
