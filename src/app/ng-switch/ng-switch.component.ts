import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-ng-switch',
  template:`
  <div [ngSwitch]="color">
 <div *ngSwitchCase="'red'" style="color: red;">You picked red color</div>
 <div *ngSwitchCase="'blue'" style="color: blue;">You picked blue color</div>
 <div *ngSwitchCase="'orange'" style="color: orange;"> You picked white color</div>
 <div *ngSwitchCase="'black'" style="color: black;">You picked black color</div>
 <div *ngSwitchDefault="" style="color: green;">You picked black color</div>
  </div>
  `,
  styles: []
})
export class NgSwitchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
public color = "blue";
}
