import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if4',
  templateUrl: './ng-if4.component.html',
  styleUrls: ['./ng-if4.component.css']
})
export class NgIf4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public isValid = false;
  public data()
  {
    this.isValid=true;
  }
}
