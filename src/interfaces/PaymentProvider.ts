export interface PaymentProvider {
  charge(amount: number): void;
}
