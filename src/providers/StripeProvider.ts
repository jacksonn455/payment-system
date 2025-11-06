import { PaymentProvider } from "../interfaces/PaymentProvider";
import { PaymentProviderName } from "../interfaces/PaymentProviderName";

export class StripeProvider implements PaymentProvider, PaymentProviderName {
  charge(amount: number): void {
    console.log(`Processing payment of $${amount} using Stripe API...`);
  }

  getName(): string {
    return "Stripe";
  }
}
