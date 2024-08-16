import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const itemPosition = state.items.findIndex((i) => i.id === item.id);
      if (itemPosition === -1) {
        state.items.push({ ...item, c_qty: 1 });
      } else {
        const itemInCart = state.items.find((i) => i.id === item.id);
        state.items[itemPosition] = {
          ...itemInCart,
          c_qty: itemInCart.c_qty + 1,
        };
      }
      state.totalAmount += item.price || item.defaultPrice;
    },
    removeItem: (state, action) => {
      const itemToRemove = action.payload;
      const itemPosition = state.items.findIndex(
        (i) => i.id === itemToRemove.id
      );
      const itemInCart = state.items.find((i) => i.id === itemToRemove.id);
      if (itemInCart.c_qty === 1) {
        console.log('running')
        state.items = state.items.filter((i) => i.id !== itemToRemove.id);
      } else {
        state.items[itemPosition] = {
          ...itemInCart,
          c_qty: itemInCart.c_qty - 1,
        };
      }
      state.totalAmount -= itemToRemove.price || itemToRemove.defaultPrice;

    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
