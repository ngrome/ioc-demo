/*
Invia la fattura al customer con i dattagli dell'ordine
*/
import { OrderInfo } from '../orderInfo';

export class Receipt {
  public sendReceipt(orderInfo: OrderInfo) {
    console.log(`Receipt sent to ${orderInfo.customer} at ${orderInfo.email} for ${orderInfo.price}$`);
  }
}
