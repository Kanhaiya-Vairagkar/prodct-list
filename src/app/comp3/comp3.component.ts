import { getLocaleEraNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { last } from 'rxjs';

@Component({
  selector: 'app-comp3',
  template: `
         <h2 [id]="pa" style="background-color: red;"> sudyuia ydaysdiua daysuasd yiua  {{name}}</h2> 

         <p [class]="ga" style="color: blue;" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic omnis, praesentium minima delectus totam quam itaque adipisci corrupti voluptatum at sunt neque magnam repellat beatae quo sit. Illo, voluptatum cum.</p>

         <input  disabled="true" id="{{name}}" type="text" value="Kanhaiya">
         <input [disabled]="true" id="{{name}}" type="text" value="Ramesh" style="margin: 10px;">
`



})
export class Comp3Component implements OnInit {

  constructor() { }
  public pa = "la";
  public ga = "sa";
  public name = "Kanhaiya";
  ngOnInit(): void {
  }

  

}
