import { configureStore } from '@reduxjs/toolkit';
import { SliceReducer } from '.';
const Store = configureStore({
  reducer: {
    SliceReducer,
  },
});
export default Store;
