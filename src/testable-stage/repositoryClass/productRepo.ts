export interface IProductRepo {
  save: any;
}

export class ProductRepo implements IProductRepo {
  public save() {
    console.log('Product inventory updated');
  }
}
