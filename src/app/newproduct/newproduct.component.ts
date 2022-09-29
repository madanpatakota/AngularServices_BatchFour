import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { productService } from '../services/products.service';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css'],
  providers:[productService]
})
export class NewproductComponent implements OnInit {

  constructor(private _prodcutService:productService) { }
  
  @ViewChild('productName') productName:ElementRef<any>;
  ngOnInit(): void {
  }

  evtSubmit(){
      let productName = this.productName.nativeElement.value;
      this._prodcutService.addProduct(productName);
  }

}
