import { useAppDispatch } from "@/store/hooks";
import {
  addQuantity,
  reduceQuantity,
  countCost,
  removeProduct,
} from "@/store/slices/cartSlice";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import {
  Card,
  Flex,
  Avatar,
  Box,
  Text,
  IconButton,
  Button,
} from "@radix-ui/themes";
import React from "react";

export default function CheckoutCard(props) {
  const { item } = props;

  const dispatch = useAppDispatch();

  const addCount = (item) => {
    dispatch(addQuantity(item));
    dispatch(countCost());
  };

  const reduceCount = (item) => {
    dispatch(reduceQuantity(item));
    dispatch(countCost());
  };

  const removeProductHandler = (item) => {
    dispatch(removeProduct(item));
    dispatch(countCost());
  };
  return (
    <div className="w-full  border-spacing-3 p-3 box-border border-2 border-indigo-500">
      <Flex gap="4" align="center">
        <Avatar size="3" src={item.thumbnail} radius="full" fallback="T" />
        <Box style={{ paddingLeft: 10 }}>
          <Text as="div" size="4" weight="bold">
            {item.title}
          </Text>
        </Box>

        <Box style={{ paddingLeft: 10 }}>
          <IconButton
            variant="classic"
            disabled={!item.count}
            onClick={() => reduceCount(item)}
          >
            <MinusIcon width="18" height="18" />
          </IconButton>
        </Box>

        <Box style={{ paddingLeft: 10 }}>
          <h3>{item.count}</h3>
        </Box>

        <Box style={{ paddingLeft: 10 }}>
          <IconButton variant="classic">
            <PlusIcon width="18" height="18" onClick={() => addCount(item)} />
          </IconButton>
        </Box>

        <Box style={{ paddingLeft: 10 }}>Rate: {item.price}</Box>
        <Box style={{ paddingLeft: 10 }}>Total: {item.price * item.count}</Box>
        <Box style={{ paddingLeft: 10 }}>
          <Button
            variant="solid"
            color="red"
            onClick={() => removeProductHandler(item)}
          >
            Remove Product
          </Button>
        </Box>
      </Flex>
    </div>
  );
}
