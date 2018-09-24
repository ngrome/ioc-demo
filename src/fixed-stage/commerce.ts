import { OrderInfo } from '../orderInfo';
import { Billing } from './billing';
import { Customer } from './customer';
import { Receipt } from './receipt';

export class Commerce {
  public customer: Customer;
  public billing: Billing;
  public receipt: Receipt;

  constructor() {
    this.customer = new Customer();
    this.billing = new Billing();
    this.receipt = new Receipt();
  }
  public processOrder(order: OrderInfo) {
    this.billing.processPayment(order.customer, order.credicard, order.price);
    this.customer.UpdateCustomerOrder(order.customer, order.product);
    this.receipt.sendReceipt(order);
  }
}
