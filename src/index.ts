import { User } from "./models/User";
import { PaymentService } from "./services/PaymentService";
import { StripeProvider } from "./providers/StripeProvider";
import { PaypalProvider } from "./providers/PaypalProvider";

const user: User = {
  name: "Jackson Magnabosco",
  preferredPayment: "paypal",
};

let provider;

if (user.preferredPayment === "paypal") {
  provider = new StripeProvider();
} else {
  provider = new PaypalProvider();
}

const paymentService = new PaymentService(provider);
paymentService.processPayment(150);
