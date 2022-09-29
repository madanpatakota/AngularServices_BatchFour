export class productService {
  private products: any = [];
  constructor() {
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

  addProduct(product: string) {
    let ID = this.products.length + 1;
    let obj = { Id: ID, Name: product };
    this.products.push(obj);
    return this.products;
  }
  removeProduct() {}
}
