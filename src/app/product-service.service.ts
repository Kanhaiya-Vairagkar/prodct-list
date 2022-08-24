import { Injectable } from '@angular/core';
import { product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  public prodctList : product [] = [];
  constructor() {
  //   this.prodctList = [{id:12,prodctName:"charger",type :"electronic" },
  // {id:12,prodctName:"charger",type :"electronic" },
  // {id:12,prodctName:"charger",type :"electronic" }];
   }
  getProdctList() {
    console.log(this.prodctList);
    return this.prodctList;
  }
  addProdct(prodctData : product) {
     this.prodctList.push(prodctData);
     //this.prodctList = 
    console.log(this.prodctList);
  }
  deleteProdct(index: number) {
    this.prodctList.splice(index,1);
    console.log(this.prodctList);
  }
}
