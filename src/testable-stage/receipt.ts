import { OrderInfo } from '../orderInfo';

export interface IReceipt {
  sendReceipt(orderInfo: OrderInfo): any;
}

export class Receipt implements IReceipt {
  public sendReceipt(orderInfo: OrderInfo) {
    console.log(`Receipt sent to ${orderInfo.customer} at ${orderInfo.email} for ${orderInfo.price}$`);
  }
}
