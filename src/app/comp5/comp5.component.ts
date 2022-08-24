import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp5',
  templateUrl: './comp5.component.html',
  styleUrls: ['./comp5.component.css']
})
export class Comp5Component implements OnInit {

  constructor() { }

  public name = "";      //Here declare
  public roll = "NobelIT";
  public color = "red";
  ngOnInit(): void {
  }

  Next() {
    
    console.log("Next pages");
    this.name=" Welcome to Angular";  //Here intialize and call at time of Next() method
  }
  save() {
    document.write("Your documents saved ");
  }
}
