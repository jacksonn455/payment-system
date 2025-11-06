import { PaymentProvider } from "../interfaces/PaymentProvider";
import { PaymentProviderName } from "../interfaces/PaymentProviderName";

export class PaypalProvider implements PaymentProvider, PaymentProviderName {
  charge(amount: number): void {
    console.log(`Processing payment of $${amount} using PayPal API...`);
  }

  getName(): string {
    return "PayPal";
  }
}
