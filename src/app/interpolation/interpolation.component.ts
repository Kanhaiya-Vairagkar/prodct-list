import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public userName ="TEST";

  inputId = "id123";

  inputPlaceHolder = "this is from ts";
  isDisabled = false;
  country = 'singa';

  name ="default Value  ";

  ngCLassData = {'uk' : this.country === 'UK',
         'singa' : this.country === 'singa',
         'us' : this.country === 'us',
        'italic': this.country === 'UK' || this.country === 'us' ||  this.country === 'singa'};
}
