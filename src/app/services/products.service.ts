import { EventEmitter, Injectable } from "@angular/core";
import { logService } from "./logs.service";

// i providing the product service  in appmodule ( when its loading........)

//(it was not loaded)
// i am providing the log service   in newproductcomponent
@Injectable()
export class productService {
  private products: any = [];
  constructor(private loginService:logService) {
    this.products = [
      {
        Id: 1,
        Name: 'Samsung',
      },
      {
        Id: 2,
        Name: 'Lenovo',
      },
    ];
  }

  getProducts() {
    return this.products;
  }

  statusEmitter = new EventEmitter<string>();
  addProduct(product: string) {
    let ID = this.products.length + 1;
    let obj = { Id: ID, Name: product };
    this.products.push(obj);
    this.statusEmitter.emit("Insert has completed with " + obj.Name + " record")
    // i can insert the service into another service....
    //this.loginService.showLog("Sucssfully added");

    return this.products;
  }
  removeProduct() {}
}
