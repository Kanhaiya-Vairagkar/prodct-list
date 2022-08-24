import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding2',
  templateUrl: './two-way-binding2.component.html',
  styleUrls: ['./two-way-binding2.component.css']
})
export class TwoWayBinding2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  user:any;
  users:any;
}
