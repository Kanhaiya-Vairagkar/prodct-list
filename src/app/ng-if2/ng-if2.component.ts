import { Component, OnInit } from '@angular/core';

@Component({
//   selector: 'app-ng-if2',
//   template: `
//   <h1 *ngIf="false; else next">
//     Kanhaiay Vairagkar
//   </h1>

// <ng-template #next>
// <h1>
//  Ajit Satpute
// </h1>
// </ng-template>
//   `,
//   styles: [` 
  
//   `]


selector: 'app-ng-if2',
template: `
<h1 *ngIf="false; then thenBlock; else elseblock">
 
</h1>

<ng-template #thenBlock>
<h1>
Ajit Satpute
</h1>
</ng-template>


<ng-template #elseblock>
<h1>
Harsh 
</h1>
</ng-template>
`,
styles: [` 

`]
})
export class NgIf2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
