import { PaypalProvider } from "../src/providers/PaypalProvider";

describe("PaypalProvider", () => {
  it("should log the PayPal payment process", () => {
    const provider = new PaypalProvider();
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();

    provider.charge(200);

    expect(consoleSpy).toHaveBeenCalledWith(
      "Processing payment of $200 using PayPal API..."
    );

    consoleSpy.mockRestore();
  });
});
