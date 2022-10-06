import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { productService } from './services/products.service';
import { logService } from './services/logs.service';
import { BasicDirective } from './basic.directive';
import { PipesOneComponent } from './pipes-one/pipes-one.component';

import { trimmer } from './trimmer.pipe';
import { ArrayFilterPipe } from './array-filter.pipe';
import { MapPipePipe } from './map-pipe.pipe';
import { ObervablesComponent } from './obervables/obervables.component';
import { CustomObservablesComponent } from './custom-observables/custom-observables.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NewproductComponent,
    BasicDirective,
    PipesOneComponent,
    trimmer,
    ArrayFilterPipe,
    MapPipePipe,
    ObervablesComponent,
    CustomObservablesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [productService,logService],
  bootstrap: [AppComponent]
})
export class AppModule { }
