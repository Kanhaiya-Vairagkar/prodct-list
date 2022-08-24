import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for3',
  templateUrl: './ng-for3.component.html',
  styleUrls: ['./ng-for3.component.css']
})
export class NgFor3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
products =[
  {name:'Brasslet',id:'24k',price:35000},
  {name:'Ring',id:'22k',price:30000},
  {name:'Chain',id:'20k',price:32000}
]
}
