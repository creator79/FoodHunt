// Create a file for your Redux reducer, e.g., restaurantReducer.js
import { createSlice } from '@reduxjs/toolkit';

const restaurantSlice = createSlice({
  name: 'restaurants',
  initialState: {
    filteredRestaurants: [],
  },
  reducers: {
    setFilteredRestaurants: (state, action) => {
        state.filteredRestaurants='';
      state.filteredRestaurants = action.payload;
    },
  },
});

export const { setFilteredRestaurants } = restaurantSlice.actions;

export default restaurantSlice.reducer;
