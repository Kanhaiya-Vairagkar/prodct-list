import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  info1: string[] = ["Kanhaiya", 'kanha123', 'KanhaiayVairagkar790@gmail.com'];
  info2: string[] = ["Raj", 'Raj145', 'Rajkale@gmail.com'];
  info3: string[] = ["Ganesh", 'Ganesh809', 'GaneshPawar@gmail.com'];


  getinfo1(): string[] {
    return this.info1;
  }
  getinfo2(): string[] {
    return this.info2;
  }
  getinfo3(): string[] {
    return this.info3;
  }
  constructor() { }
}
