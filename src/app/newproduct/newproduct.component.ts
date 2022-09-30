import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { logService } from '../services/logs.service';
import { productService } from '../services/products.service';
@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css'],
  providers:[]
})
export class NewproductComponent{
  constructor(private _prodcutService:productService,private _loginSevice:logService) { }
  @ViewChild('productName') productName:ElementRef<any>;

  evtSubmit(){
      let productName = this.productName.nativeElement.value;
      this._prodcutService.addProduct(productName);
  }
}
