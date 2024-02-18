import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalCost: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index === -1) {
        console.log("from reducer add product");
        state.cart.push({ ...action.payload, count: 1 });
      }
    },
    removeProduct: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },

    addQuantity: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.cart[index].count++;
      }
    },

    reduceQuantity: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.cart[index].count--;
      }
    },

    clearCart: (state) => {
      state.cart = [];
      state.totalCost = 0;
    },

    countCost: (state) => {
      let sum = 0;
      for (let i = 0; i < state.cart.length; i++) {
        sum = sum + state.cart[i].price * state.cart[i].count;
      }
      state.totalCost = sum;
    },
  },
});

export const {
  addProduct,
  removeProduct,
  addQuantity,
  reduceQuantity,
  clearCart,
  countCost,
} = cartSlice.actions;
export default cartSlice.reducer;
