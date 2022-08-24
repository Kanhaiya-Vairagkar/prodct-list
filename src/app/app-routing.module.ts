import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { NgFor3Component } from './ng-for3/ng-for3.component';
import { NgIf2Component } from './ng-if2/ng-if2.component';
import { NgIf4Component } from './ng-if4/ng-if4.component';
import { ProdctListComponent } from './prodct-list/prodct-list.component';

const routes: Routes = [
  {path:'getList', component:ProdctListComponent},
{path:'create', component:CreateProductComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
