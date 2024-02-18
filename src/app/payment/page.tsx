import Navbar from "@/components/navbar";
import PaymentPage from "@/pages/paymentPage";
import React from "react";

export default function Payment() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-3">
        <PaymentPage />
      </div>
    </>
  );
}
