/*
Aggiorna i DB prodotti e cliente dell'ordine
*/
import { CustomerRepo } from './repositoryClass/customerRepo';
import { ProductRepo } from './repositoryClass/productRepo';

export class Customer {
  public UpdateCustomerOrder(customerName: string, product: string) {
    const customerRepo = new CustomerRepo();
    const productRepo = new ProductRepo();

    productRepo.save();
    customerRepo.save();

    console.log(`Customer ${customerName} purchased ${product} saved`);
  }
}

/*
Le istanze di CustomerRepo e ProductRepo sono hard-coded nel metodo della classe Customer
Questo problema ci porta a domandarci:
"Come effettuo il testing"?
Come posso fare Unit Test?
Ho solo un metodo, cambiare il codice sorgente inserendo delle classi Mock.
Ma l'obiettivo è creare Unit Test senza modificare il codice da testare.
*/
