import { PaymentProvider } from "../interfaces/PaymentProvider";

export class PaymentService {
  constructor(private provider: PaymentProvider) {}

  processPayment(amount: number): void {
    console.log("Starting payment process...");
    this.provider.charge(amount);
    console.log("Payment completed successfully!");
  }
}
