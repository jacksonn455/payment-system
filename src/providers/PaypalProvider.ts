import { PaymentProvider } from "../interfaces/PaymentProvider";

export class PaypalProvider implements PaymentProvider {
  charge(amount: number): void {
    console.log(`Processing payment of $${amount} using PayPal API...`);
  }
}
