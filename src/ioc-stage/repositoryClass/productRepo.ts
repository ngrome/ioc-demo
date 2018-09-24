export abstract class IProductRepo {
  public save: any;
}

export class ProductRepo implements IProductRepo {
  public save() {
    console.log('Product inventory updated');
  }
}
