import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch2',
  templateUrl: './ng-switch2.component.html',
  styleUrls: ['./ng-switch2.component.css']
})
export class NgSwitch2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public selectedProduct = "";
  //public type = ""; //We can declared with this way also
  type:any;   //We can declared with this way also

  getProductVal(val: any) {
    console.log(val.type); //Here we can see type of Events
    // document.write(val.target.value);
    this.selectedProduct = val.target.value;
    this.type = val.type;

  }
}
