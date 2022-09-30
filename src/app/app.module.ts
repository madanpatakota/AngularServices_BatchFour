import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { productService } from './services/products.service';
import { logService } from './services/logs.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NewproductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [productService,logService],
  bootstrap: [AppComponent]
})
export class AppModule { }
