import { StripeProvider } from "../src/providers/StripeProvider";

describe("StripeProvider", () => {
  it("should log the Stripe payment process", () => {
    const provider = new StripeProvider();
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();

    provider.charge(100);

    expect(consoleSpy).toHaveBeenCalledWith(
      "💳 Processing payment of $100 using Stripe API..."
    );

    consoleSpy.mockRestore();
  });
});
