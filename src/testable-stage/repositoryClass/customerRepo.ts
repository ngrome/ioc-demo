export interface ICustomerRepo {
  save: any;
}

export class CustomerRepo implements ICustomerRepo {
  public save() {
    console.log('Customer Purchased saved');
  }
}
