import { configureStore } from '@reduxjs/toolkit';
import { SliceOneReducer } from './indexOne';
const StoreOne = configureStore({
  reducer: {
    SliceOneReducer,
  },
});
export default StoreOne;
