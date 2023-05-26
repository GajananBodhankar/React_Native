import {createSlice} from '@reduxjs/toolkit';
interface Icount {
  count: number;
}
const Obj: Icount = {
  count: 0,
};
export const ReduxAsyncSlice = createSlice({
  name: 'Async redux',
  initialState: Obj,
  reducers: {
    Set: (state, action) => {
      state.count = action.payload;
    },
    Inc: (state, action) => {
      state.count = action.payload + 1;
    },
    Dec: (state, action) => {
      state.count = action.payload - 1;
    },
  },
});
export const StoreAsyncReducer = ReduxAsyncSlice.reducer;
export const {Set, Inc, Dec} = ReduxAsyncSlice.actions;
