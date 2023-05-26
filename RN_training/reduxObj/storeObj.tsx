import { configureStore } from '@reduxjs/toolkit';
import { ObjReducer } from './indObj';
const Store = configureStore({
  reducer: {
    ObjReducer,
  },
});
export default Store;
