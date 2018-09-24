export abstract class IBilling {
  public processPayment: any;
}

export class Billing implements IBilling {
  public processPayment(customerName: string, customerCC: string, total: number) {
    console.log(`Payment processed for ${customerName} with CC number ${customerCC} for total: ${total}$`);
  }
}
