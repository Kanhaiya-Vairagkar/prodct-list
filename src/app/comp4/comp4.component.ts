import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp4',
  template: `
  <!-- <h2 [id]="pa" style="background-color: red;"> sudyuia ydaysdiua daysuasd yiua  {{name}}</h2> 

  <p [class]="ga" style="color: blue;" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic omnis, praesentium minima delectus totam quam itaque adipisci corrupti voluptatum at sunt neque magnam repellat beatae quo sit. Illo, voluptatum cum.</p>

  <input  disabled="false" value="{{name}}" type="text" >
  <input bind-disabled="false" value="{{name}}" type="text" style="margin: 10px;">
  <input [disabled]="isdisabled" value="{{name}}" type="text" style="margin: 10px;">   -->

<div>
<p style="text-align: center;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus soluta expedita minima vel distinctio debitis facilis quia dignissimos, maxime molestias, recusandae aperiam repellat reprehenderit quaerat tempore magni optio et sapiente.</p>
<button style="background-color: red;" (click)="goBack()">GoBack</button>
<span><button (click)="save()" style="margin-left:25px;">Save</button></span>


</div>
`
})

export class Comp4Component implements OnInit {

  constructor() { }
  public pa = "la";
  public ga = "sa";
  public name = "Vairagkar";
  public isdisabled = false;
  ngOnInit(): void {
  }
  goBack(): void {
  document.write("Go outside");
   
  }
  save(): void {
    document.write("Documents Submitted successfully");
  }
}


