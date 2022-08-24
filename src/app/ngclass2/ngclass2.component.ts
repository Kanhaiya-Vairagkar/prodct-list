import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass2',
  template: ` 
<div [class.myclass]="myproperty">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ipsum deserunt ea animi quisquam cum sapiente doloremque nihil dolorem corporis atque dicta dignissimos illo tempora quidem, facilis natus debitis veniam.
</div>
<div class="myclass">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ipsum deserunt ea animi quisquam cum sapiente doloremque nihil dolorem corporis atque dicta dignissimos illo tempora quidem, facilis natus debitis veniam.
</div>
<div [style.margin]="size">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ipsum deserunt ea animi quisquam cum sapiente doloremque nihil dolorem corporis atque dicta dignissimos illo tempora quidem, facilis natus debitis veniam.
</div>
<div [style.margin]="isActive?mystyle:'5px'">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ipsum deserunt ea animi quisquam cum sapiente doloremque nihil dolorem corporis atque dicta dignissimos illo tempora quidem, facilis natus debitis veniam.
</div>
<div [ngClass]="mltclasses">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ipsum deserunt ea animi quisquam cum sapiente doloremque nihil dolorem corporis atque dicta dignissimos illo tempora quidem, facilis natus debitis veniam.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ipsum deserunt ea animi quisquam cum sapiente doloremque nihil dolorem corporis atque dicta dignissimos illo tempora quidem, facilis natus debitis veniam.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ipsum deserunt ea animi quisquam cum sapiente doloremque nihil dolorem corporis atque dicta dignissimos illo tempora quidem, facilis natus debitis veniam.
</div>
<div [ngStyle]="mltstyle">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ipsum deserunt ea animi quisquam cum sapiente doloremque nihil dolorem corporis atque dicta dignissimos illo tempora quidem, facilis natus debitis veniam.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ipsum deserunt ea animi quisquam cum sapiente doloremque nihil dolorem corporis atque dicta dignissimos illo tempora quidem, facilis natus debitis veniam.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ipsum deserunt ea animi quisquam cum sapiente doloremque nihil dolorem corporis atque dicta dignissimos illo tempora quidem, facilis natus debitis veniam.
</div>
  `,

  styles: [` 

  .myclass{
    margin:5px;
    padding:10px;
    width:450px;
    height:450px;
    color:red;
    background-color:blue;
    font-size:40px;
    font-weight:40px;
  }
  .class1{
    margin:5px;
    padding:10px;
    width:450px;
    height:450px;
    text-align:justify;
    /* color:red;
    background-color:blue; */
    /* font-size:40px;
    font-weight:40px; */
  }
  .class2{
    /* margin:5px;
    padding:10px;
    width:450px;
    height:450px; */
    /* color:yellow; */
    background-color:green;
    /* font-size:40px;
    font-weight:40px; */
  }
  .class3{
    color:yellow;
    /* margin:5px;
    padding:10px;
    width:450px;
    height:450px; */
    /* color:yellow;
    background-color:green; */
    /* font-size:40px;
    font-weight:40px; */
  }
  `]

})
export class Ngclass2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myproperty: boolean = true; //Here we are desiding classproperties at runtime
  public size = "25px";  //Here we are desiding styleproperties at runtime
  public color = "red";  //Here we are desiding styelproperties at runtime
  public isActive = false;
  public mystyle = "50px";

  mltclasses = {
    class1: true,
    class2: true,
    class3: true
  }
  mltstyle = {
    'color': 'black',
    'background-color': 'blue',
    'font-size': '25px'
  }

}
