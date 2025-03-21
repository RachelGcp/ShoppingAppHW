import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: ['Groceries', 'Dairy', 'Bakery', 'Meat', 'Produce', 'Household', 'Electronics'],
  items: [],
  orderDetails: {
    fullName: '',
    address: '',
    email: ''
  }
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateOrderDetails: (state, action) => {
      state.orderDetails = { ...state.orderDetails, ...action.payload };
    },
    clearCart: (state) => {
      state.items = [];
      state.orderDetails = {
        fullName: '',
        address: '',
        email: ''
      };
    }
  }
});

export const { addItem, removeItem, updateOrderDetails, clearCart } = cartSlice.actions;

export const selectCategories = (state) => state.cart.categories;
export const selectItems = (state) => state.cart.items;
export const selectOrderDetails = (state) => state.cart.orderDetails;

export default cartSlice.reducer;