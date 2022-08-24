import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch1',
  template: `
    <div [ngSwitch]="Month">
      <div *ngSwitchCase="'January'">January</div>
      <div *ngSwitchCase="'Februvary'">Februvary</div>
      <div *ngSwitchCase="'March'">March</div>
      <div *ngSwitchCase="'April'">April</div>
      <div *ngSwitchCase="'May'">May</div>
      <div *ngSwitchCase="'June'">June</div>
      <div *ngSwitchCase="'July'">July</div>
      <div *ngSwitchCase="'August'">August</div>
      <div *ngSwitchCase="'September'">September</div>
      <div *ngSwitchCase="'Octomber'">Octomber</div>
      <div *ngSwitchCase="'November'">November</div>
      <div *ngSwitchCase="'December'">December</div>
      <div *ngSwitchDefault="">Please select month</div>
    </div>
  `,
  styles: [`
  
  `]
})
export class NgSwitch1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
public Month = "July";
}
