"use client";

import Navbar from "@/components/navbar";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { addProduct, countCost } from "@/store/slices/cartSlice";
import { Grid, Box, Button } from "@radix-ui/themes";
import { useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  productId: string;
};

export default function SingleProduct(props: Props) {
  const fetchData = async () => {
    const res = await fetch(
      `https://dummyjson.com/products/${Number(props.productId)}`
    ).then((res) => res.json());
    return res;
  };

  const { data: product } = useSuspenseQuery({
    queryKey: ["fetch-product"],
    queryFn: () => fetchData(),
  });

  const router = useRouter();

  const { user } = useAppSelector((state) => state.rootedReducer.user);
  const dispatch = useAppDispatch();

  // const { cart } = useAppSelector((state) => state.rootedReducer.cart);
  // console.log(cart);

  const addProductHandler = (item) => {
    console.log(user);
    if (user) {
      dispatch(addProduct(item));
      dispatch(countCost());
      // dispatch(clearCart());
    } else {
      router.push("/login");
    }
  };

  return (
    <>
      <Navbar />
      <h1 className="text-center text-2xl font-semibold">{product.title}</h1>
      <Grid
        columns={{ xs: "1", sm: "2", md: "2", lg: "2" }}
        gap="5"
        width="auto"
      >
        <Box>
          <img
            src={product.thumbnail}
            alt={product.title}
            style={{
              objectFit: "none",
              width: "100%",
              height: "300px",
            }}
          />
        </Box>
        <Box>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
          <p>Stock: {product.stock}</p>
          <p>Rating: {product.rating}</p>
          <Button
            variant="solid"
            color="indigo"
            onClick={() => addProductHandler(product)}
          >
            Add to Cart
          </Button>
        </Box>
      </Grid>
    </>
  );
}
