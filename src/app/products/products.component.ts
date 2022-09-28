import { Component, OnInit } from '@angular/core';
// import { logService } from 'src/app/logs.service';\
import { logService } from '../services/logs.service';
import { productService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers:[logService,productService]
})
export class ProductsComponent implements OnInit {

  //class
  //component

  //pass parameter
  //we cann't

  //supports DI
  //not supports 

  constructor(private _logService : logService , private _productService : productService) { }
     
  ngOnInit(): void {

    this._logService.showLog("Hello world.........");

    let prodcutsList = this._productService.getProducts();
 
    // console.log(prodcutsList);
    this._logService
    .showLog(prodcutsList);




    // let refservice = new logService();
    // // logService here the class here
    // //refservice referring here
    //  // the instance of the service....

    // // Manually i am creating the instance 
    //  // of the service
    //  refservice.showLog("from ProductCompoennt");
  }

}
