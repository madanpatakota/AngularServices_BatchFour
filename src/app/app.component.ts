import { Component } from '@angular/core';
import { logService } from './services/logs.service';
import { productService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [logService , productService]
})
export class AppComponent {
  title = 'AngularServices_BatchFour';

  constructor(private _logService : logService , private _productService : productService) { }
  
  prodcutsList = [];
  ngOnInit(): void {

    this._logService.showLog("Hello world.........");

     this.prodcutsList = 
     this._productService.getProducts();
 
    // console.log(prodcutsList);
    this._logService
    .showLog(this.prodcutsList);




    // let refservice = new logService();
    // // logService here the class here
    // //refservice referring here
    //  // the instance of the service....

    // // Manually i am creating the instance 
    //  // of the service
    //  refservice.showLog("from ProductCompoennt");
  }


}
