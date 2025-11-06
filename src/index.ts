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

console.log(`User ${user.name} selected payment method: ${user.preferredPayment}`);

const paymentService = new PaymentService();
const providerStripe = new StripeProvider();
const providerPaypal = new PaypalProvider();

paymentService.addPaymentProvider(providerStripe);
paymentService.addPaymentProvider(providerPaypal);
paymentService.processPayment(150, user.preferredPayment);
