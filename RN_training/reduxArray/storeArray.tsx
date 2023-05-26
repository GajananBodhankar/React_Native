import { configureStore } from '@reduxjs/toolkit';
import SliceArray from './actionArray';
const ArrayStore = configureStore({
  reducer: {
    SliceArray,
  },
});
export default ArrayStore;
