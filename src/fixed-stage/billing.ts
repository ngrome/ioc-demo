/*
La classe processa il pagamento tramite le info dell'ordine
*/

export class Billing {
  public processPayment(customerName: string, customerCC: string, total: number) {
    console.log(`Payment processed for ${customerName} with CC number ${customerCC} for total: ${total}$`);
  }
}
