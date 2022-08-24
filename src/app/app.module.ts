import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { Comp5Component } from './comp5/comp5.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { TwoWayBinding2Component } from './two-way-binding2/two-way-binding2.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { Ngclass2Component } from './ngclass2/ngclass2.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgIf2Component } from './ng-if2/ng-if2.component';
import { NgIf3Component } from './ng-if3/ng-if3.component';
import { NgIf4Component } from './ng-if4/ng-if4.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgSwitch1Component } from './ng-switch1/ng-switch1.component';
import { NgSwitch2Component } from './ng-switch2/ng-switch2.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgFor2Component } from './ng-for2/ng-for2.component';
import { NgFor3Component } from './ng-for3/ng-for3.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProdctListComponent } from './prodct-list/prodct-list.component';
import { ProductServiceService } from './product-service.service';
import { EInfoComponent } from './e-info/e-info.component';
import { PipeComponent } from './pipe/pipe.component';
@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    Comp5Component,
    TwoWayBindingComponent,
    TwoWayBinding2Component,
    NgclassComponent,
    Ngclass2Component,
    InterpolationComponent,
    NgIfComponent,
    NgIf2Component,
    NgIf3Component,
    NgIf4Component,
    NgSwitchComponent,
    NgSwitch1Component,
    NgSwitch2Component,
    NgForComponent,
    NgFor2Component,
    NgFor3Component,
    CreateProductComponent,
    ProdctListComponent,
    EInfoComponent,
    PipeComponent
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
