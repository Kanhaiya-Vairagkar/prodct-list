import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor() { }
  public color = "red";
  public colors = "green";
  public font = "fontsize";
  
  ngOnInit(): void {
  }

}
