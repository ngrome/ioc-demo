import { OrderInfo } from '../orderInfo';
import { IBilling } from './billing';
import { ICustomer } from './customer';
import { IReceipt } from './receipt';

import { Service } from './ioc';

@Service()
export class Commerce {
  constructor(
    private customer: ICustomer,
    private billing: IBilling,
    private receipt: IReceipt) {

  }

  public processOrder(order: OrderInfo) {

    this.billing.processPayment(order.customer, order.credicard, order.price);
    this.customer.UpdateCustomerOrder(order.customer, order.product);
    this.receipt.sendReceipt(order);
  }
}
