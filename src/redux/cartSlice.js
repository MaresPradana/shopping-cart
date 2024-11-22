import { createSlice } from '@reduxjs/toolkit';

import blueShirt from '../assets/blue-shirt.png';
import redHodies from '../assets/red-hodies.png';

const initialState = {
  items: [
    {
        id: 1,
        name: 'Blue denim shirt',
        category: 'Shirt',
        variant: 'Blue',
        ratio: 'M',
        price: 17.99,
        quantity: 1,
        image: blueShirt
    },{
        id: 2,
        name: 'Red hoodie',
        category: 'Hoodie',
        variant: 'Red',
        ratio: 'M',
        price: 35.99,
        quantity: 1,
        image: redHodies }
  ],
  totalAmount: 53.98,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    incrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) item.quantity += 1;
      state.totalAmount = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
      state.totalAmount = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      state.totalAmount = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
});

export const { incrementQuantity, decrementQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
