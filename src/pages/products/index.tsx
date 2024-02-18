"use client";
import CardComp from "@/components/card/productCard";
import Navbar from "@/components/navbar";
import { TItem } from "@/types/items.types";
import { Grid, Box } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

export default function Products() {
  const [query, setQuery] = useState("");
  const fetchData = async (q: string) => {
    const url = q
      ? `https://dummyjson.com/products/search?q=${q}`
      : `https://dummyjson.com/products`;

    console.log(url);
    const res = await fetch(url).then((res) => res.json());
    return res;
  };

  const { data: products } = useQuery({
    queryKey: [query],
    queryFn: () => fetchData(query),
  });

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-3">
        <input
          type="text"
          name="price"
          id="price"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-10"
          placeholder="Search Products"
          onChange={onChange}
        />
        <Grid
          columns={{ initial: "1", xs: "2", sm: "2", md: "3", lg: "4" }}
          gap="5"
          width="auto"
        >
          {products?.products?.map((item: TItem) => (
            <Box key={item.id}>
              <CardComp item={item} />
            </Box>
          ))}
        </Grid>
      </div>
    </>
  );
}
