import React from "react";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "@radix-ui/themes";

type Props = {};

export default function StripeCheckout({}: Props) {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!stripe || !elements) {
        return;
      }

      console.log(elements);

      const result = await stripe.confirmCardPayment(
        "sk_test_lO0fcgGXXoAOd0iOapJ1OKD000CNGx43nS"
      );

      console.log(result);

      if (result.error) {
        console.log(result.error.message);
      } else {
        console.log(result);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <Button variant="solid" color="indigo" type="submit">
        Submit
      </Button>
    </form>
  );
}
