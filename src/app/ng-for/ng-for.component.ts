import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  template: ` 
  <div *ngFor="let color of colors;even as u">
<p>
{{ u }} {{ color }}
</p>
 </div>
  `,
  styles: [`
  
  `]
})
export class NgForComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public colors = ["Kanhaiaya", "Vairagkar", "Pandharpur", 456];
}
