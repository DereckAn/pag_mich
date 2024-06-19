import { createSlice } from "@reduxjs/toolkit";

interface CartItem {
  productId: number;
  quantity: number;
}

const initialState: { items: CartItem[] } = { items: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { productId, quantity } = action.payload;
      const existingItem = state.items.findIndex(
        item => item.productId === productId
      )

      if (existingItem >= 0) {
        state.items[existingItem].quantity += quantity
      } else {
        state.items.push({ productId, quantity });
      }

    // if (state.items[productId]) {
    //     state.items[productId].quantity += quantity;
    //   } else {
    //     state.items[productId] = { productId, quantity };
    //   }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
