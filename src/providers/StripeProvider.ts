import { PaymentProvider } from "../interfaces/PaymentProvider";

export class StripeProvider implements PaymentProvider {
  charge(amount: number): void {
    console.log(`Processing payment of $${amount} using Stripe API...`);
  }
}
