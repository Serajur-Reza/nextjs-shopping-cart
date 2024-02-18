import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addProduct, clearCart, countCost } from "@/store/slices/cartSlice";
import { TItem } from "@/types/items.types";
import { Button, Card, Inset } from "@radix-ui/themes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  item: TItem;
};

export default function CardComp(props: Props) {
  const { item } = props;
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
      router.push("/login", { scroll: false });
    }
  };
  return (
    <div>
      <Card size="2" className="cursor-pointer">
        <Inset clip="padding-box" side="top" pb="current">
          <img
            src={item.thumbnail}
            alt={item.title}
            style={{
              display: "block",
              objectFit: "cover",
              width: "100%",
              height: 140,
            }}
          />
        </Inset>

        <div>
          <Link href={`/products/${item.id}`}>
            <h1 className="text-2xl font-bold">{item.title}</h1>
          </Link>
          <p>Price: {item.price}</p>
          <p>Stock: {item.stock}</p>
          <p>Rating: {item.rating}</p>

          <Button
            variant="solid"
            color="indigo"
            onClick={() => addProductHandler(item)}
          >
            Add to Cart
          </Button>
        </div>
      </Card>
    </div>
  );
}
