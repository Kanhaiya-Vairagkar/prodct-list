import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if3',
  templateUrl: './ng-if3.component.html',
  styleUrls: ['./ng-if3.component.css']
})
export class NgIf3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {


  }
  isValid: boolean = false;
  public onClick() {
    this.isValid = true;
  }
  
  public onClick1() {
    this.isValid = false;
  }
}
