import { Component } from '@angular/core';
import { logService } from './services/logs.service';
import { productService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : []
})
export class AppComponent {
  constructor(private _logService : logService , private _productService : productService) { }
  prodcutsList = [];
  ngOnInit(): void {
     this.prodcutsList = this._productService.getProducts();
  }
}
