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

    //http 


    // api name or end point
    //http(<api or endpoint confituration>)
    //.subscribe((response)=>{
    //products = response;
    //})



    return this.products;
  }
}
