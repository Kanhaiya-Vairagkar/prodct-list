import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  template: `
  <h2 class="text-special">welcome{{name}}</h2>
  <h2 class="text-danger">Kanhaiya</h2>
  <h2 [class]="successclass">Vairagkar</h2>
  <h2 class="text-danger" [class]="successclass">Class Bidnig</h2> 
  <h2 [class.text-danger]="hasherror">Nobel IT</h2>
  <h2 [ngClass]="messageClass">pune</h2>
  `,
  styles: [`
  .text-success{
    color:green;
    font-style: italic;
  }
  .text-danger{
    color:red;
    font-style: italic;
    
  }
  .text-special{
    font-style: italic;
    color:blue;
   
  }
  `]
})
export class NgclassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public name = " KV_Group";
  public successclass = "text-success";
  public hasherror = true;
  public isSpecial = true;
  public messageClass = {
    ".text-success": !this.hasherror,
    ".text-danger": this.isSpecial,
    ".text-special": this.hasherror

  }
}
