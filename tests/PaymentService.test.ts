import { PaymentService } from "../src/services/PaymentService";
import { PaymentProvider } from "../src/interfaces/PaymentProvider";

class MockProvider implements PaymentProvider {
  charge(amount: number): void {
    console.log(`Mock charge: ${amount}`);
  }
}

describe("PaymentService", () => {
  it("should call provider.charge when processing a payment", () => {
    const mockProvider = new MockProvider();
    const chargeSpy = jest.spyOn(mockProvider, "charge");
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();

    const service = new PaymentService(mockProvider);
    service.processPayment(150);

    expect(consoleSpy).toHaveBeenCalledWith("Starting payment process...");
    expect(chargeSpy).toHaveBeenCalledWith(150);
    expect(consoleSpy).toHaveBeenCalledWith("Payment completed successfully!");

    consoleSpy.mockRestore();
  });
});
