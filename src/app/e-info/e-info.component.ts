import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-e-info',
  templateUrl: './e-info.component.html',
  styleUrls: ['./e-info.component.css'],
  providers: [DataService]
})
export class EInfoComponent implements OnInit {


  infoReceived1: string[] = [];
  infoReceived2: string[] = [];
  infoReceived3: string[] = [];

  getInfoFromService1() {
    this.infoReceived1 = this.dService.getinfo1();
  }
  getInfoFromService2() {
    this.infoReceived2 = this.dService.getinfo2();
  }
  getInfoFromService3() {
    this.infoReceived3 = this.dService.getinfo3();
  }
  constructor(private dService: DataService) { }
  ngOnInit(): void {
  }

}
