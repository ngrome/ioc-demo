import { OrderInfo } from './orderInfo';

import { Commerce as Commerce1} from './fixed-stage/commerce';

import {
  Billing,
  Commerce as Commerce2,
  Customer,
  CustomerRepo,
  ProductRepo,
  Receipt } from './testable-stage';

import { EasyIoC } from './ioc-stage/ioc';

import {
  Billing as Billing3,
  Commerce as Commerce3,
  Customer as Customer3,
  CustomerRepo as CustomerRepo3,
  ProductRepo as ProductRepo3,
  Receipt as Receipt3} from './ioc-stage';


const orderInfo: OrderInfo = {
  credicard: '1234567890',
  customer: 'Lorenzo Franceschini',
  email: 'l.franceschini@gmail.com',
  price: 980,
  product: 'Apple Iphone X',
};

const commerce1 = new Commerce1();
commerce1.processOrder(orderInfo);

console.log('*************');
console.log('*************');
console.log('*************');
console.log('*************');
console.log('*************');



const commerce2 = new Commerce2(
  new Customer(
    new CustomerRepo(),
    new ProductRepo()),
  new Billing(),
  new Receipt());
commerce2.processOrder(orderInfo);


console.log('*************');
console.log('*************');
console.log('*************');
console.log('*************');
console.log('*************');

// const commerce3 = new Commerce3();
const injector = new EasyIoC();
injector.register('ICustomer', Customer3);
injector.register('IBilling', Billing3);
injector.register('IReceipt', Receipt3);
injector.register('ICustomerRepo', CustomerRepo3);
injector.register('IProductRepo', ProductRepo3);


const commerce3 = injector.resolve(Commerce3);
commerce3.processOrder(orderInfo);
