"use client";

import CheckoutCard from "@/components/card/checkoutCard";
import Navbar from "@/components/navbar";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Button, Grid } from "@radix-ui/themes";
import React from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cart, totalCost } = useAppSelector(
    (state) => state.rootedReducer.cart
  );

  const { user } = useAppSelector((state) => state.rootedReducer.user);

  const router = useRouter();

  const invoiceHandler = (item) => {
    console.log(user);
    if (user) {
      router.push("/payment");
      // dispatch(clearCart());
    } else {
      router.push("/login");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-3">
        <Grid columns={{ initial: "1" }}>
          {cart?.map((item) => (
            <div key={item.id}>
              <CheckoutCard item={item} />
            </div>
          ))}
        </Grid>

        <Grid columns={{ initial: "1" }}>Total: {totalCost}</Grid>

        <Button variant="solid" color="indigo" onClick={invoiceHandler}>
          Confirm Order
        </Button>
      </div>
    </>
  );
}
