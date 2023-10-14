import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import appReducer from '../features/app/appSlice';
import addressReducer from '../features/address/addressSlice';
import restaurantReducer from '../features/address/restaurantReducer'; // Adjust the import path if needed

const store = configureStore({
  reducer: {
    cart: cartReducer,
    app: appReducer,
    address: addressReducer,
    restaurants: restaurantReducer, // Include the restaurant reducer here
  },
});

export default store;
