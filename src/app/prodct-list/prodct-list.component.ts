import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { product } from '../product';
@Component({
  selector: 'app-prodct-list',
  templateUrl: './prodct-list.component.html',
  styleUrls: ['./prodct-list.component.css']
})
export class ProdctListComponent implements OnInit {
  prodctList: product[] = [];
  constructor(private prodctService: ProductServiceService) {
  }
  ngOnInit(): void {
    this.prodctList = this.prodctService.getProdctList();
  }

  deleteProduct(index: number) {
    this.prodctService.deleteProdct(index);
    this.prodctList = this.prodctService.getProdctList();
  }


}
