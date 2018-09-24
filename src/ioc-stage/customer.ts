import { ICustomerRepo } from './repositoryClass/customerRepo';
import { IProductRepo } from './repositoryClass/productRepo';

import { Service } from './ioc';

export abstract class ICustomer {
  public UpdateCustomerOrder: any;
}

@Service()
export class Customer implements ICustomer {

  constructor(
    public customerRepo: ICustomerRepo,
    public productRepo: IProductRepo) {}

  public UpdateCustomerOrder(customerName: string, product: string) {

    this.productRepo.save();
    this.customerRepo.save();

    console.log(`Customer ${customerName} purchased ${product} saved`);
  }
}

/*
Qui per fare unit testing mi devo creare delle classi Mock che mi rappresentano le due dipendenze del mio costruttore
*/
