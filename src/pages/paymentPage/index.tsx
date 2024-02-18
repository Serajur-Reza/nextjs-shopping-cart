"use client";
import React from "react";

import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "@radix-ui/themes";
import StripeCheckout from "@/components/stripeCheckout";

const stripePromise = loadStripe("pk_test_9LdgoCBp8Incv69ExYHe6Z7700x0gmpujW");

export default function PaymentPage() {
  const options = {
    clientSecret: "sk_test_lO0fcgGXXoAOd0iOapJ1OKD000CNGx43nS",
    mode: "payment",
    currency: "usd",
    amount: 1099,
  };

  return (
    <div>
      <Elements stripe={stripePromise} options={options.clientSecret}>
        <StripeCheckout />
      </Elements>
    </div>
  );
}
