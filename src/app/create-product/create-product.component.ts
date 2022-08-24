import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { product } from '../product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(public prodctService : ProductServiceService,public router: Router) { }
  name ="";
  type = "";
  id : number = 0;
  ngOnInit(): void {
  }

  addProdct() {
      let prodctData : product = {id:this.id, prodctName:this.name, type:this.type};
   this.prodctService.addProdct(prodctData);

   this.router.navigateByUrl('\getList');
  }

}
