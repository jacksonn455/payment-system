import dotenv from "dotenv";
dotenv.config();

import { User } from "./models/User";
import { PaymentService } from "./services/PaymentService";
import { StripeProvider } from "./providers/StripeProvider";
import { PaypalProvider } from "./providers/PaypalProvider";

const preferredPayment = process.env.PREFERRED_PAYMENT as "stripe" | "paypal";

const user: User = {
  name: "Jackson Magnabosco",
  preferredPayment: preferredPayment,
};

let provider;

if (user.preferredPayment === "stripe") {
  provider = new StripeProvider();
} else {
  provider = new PaypalProvider();
}

console.log(`User ${user.name} selected payment method: ${user.preferredPayment}`);

const paymentService = new PaymentService(provider);
paymentService.processPayment(150);
