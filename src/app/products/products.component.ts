import { Component, Input , OnInit} from '@angular/core';
import { logService } from '../services/logs.service';
import { productService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  @Input('products') prodcutsList: any;
  constructor(
    private _productService: productService,
    private _logSevice: logService
  ) {}
  //event emitter having the 2 methods
  //emit      /// emiiting the data.
  //subscrie  /// what ever you are emitting the data . that data you can receive......
  ngOnInit() {
    this._productService.statusEmitter.subscribe((response) => {
      this._logSevice.showLog("FromProductS componet " + response);
    });
  }
}
