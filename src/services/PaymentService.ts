import { PaymentProvider } from "../interfaces/PaymentProvider";
import { PaymentProviderName } from "../interfaces/PaymentProviderName";

type CombineInterface = PaymentProvider & PaymentProviderName;

export class PaymentService {
  private providers: CombineInterface[] = [];

  addPaymentProvider(provider: CombineInterface): void {
    this.providers.push(provider);
  }

  processPayment(amount: number, paymentProviderName: string): void {
    console.log("Starting payment process...");

    for (const provider of this.providers) {
      if (provider.getName() === paymentProviderName) {
        provider.charge(amount);
        console.log("Payment completed successfully!");
        return;
      }
    }

    console.log(`❌ No provider found with name: ${paymentProviderName}`);
  }
}
