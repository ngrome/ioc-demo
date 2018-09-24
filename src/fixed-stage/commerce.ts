import { OrderInfo } from '../orderInfo';
import { Billing } from './billing';
import { Customer } from './customer';
import { Receipt } from './receipt';

export class Commerce {
  public processOrder(order: OrderInfo) {
    const customer = new Customer();
    const billing = new Billing();
    const receipt = new Receipt();

    billing.processPayment(order.customer, order.credicard, order.price);
    customer.UpdateCustomerOrder(order.customer, order.product);
    receipt.sendReceipt(order);
  }
}
