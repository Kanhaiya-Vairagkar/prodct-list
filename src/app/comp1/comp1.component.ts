import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor() { }
  public name = "Kanhaiya";
  public myId = "testId";
  public myIdp = "red";
  public myIdl = "green";

  ngOnInit(): void {
  }
} 