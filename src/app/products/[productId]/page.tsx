import SingleProduct from "@/pages/products/SingleProduct";
import React from "react";

export default function Product({ params }) {
  return <SingleProduct productId={params.productId} />;
}
