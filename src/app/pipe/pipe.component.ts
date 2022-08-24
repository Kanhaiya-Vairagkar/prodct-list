import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

 public dateToday:string="";
  public name:string="";
  public value:Number=0;
  constructor() { }

  ngOnInit(): void {
    this.dateToday = new Date().toDateString();
    this.name = "Kanhaiya";
    this.value=87564
  }

}
