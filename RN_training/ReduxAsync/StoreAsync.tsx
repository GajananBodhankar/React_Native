import {configureStore} from '@reduxjs/toolkit';
import {StoreAsyncReducer} from './ReduxAsyncSlice';
export const StoreAsync = configureStore({
  reducer: {
    StoreAsyncReducer,
  },
});

export type RootState=ReturnType <typeof StoreAsync.getState>;
export type AppDispatch= typeof StoreAsync.dispatch