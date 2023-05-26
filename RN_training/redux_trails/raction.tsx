import { createSlice } from '@reduxjs/toolkit';
interface I {
  val: number;
  change: number;
}
const init: I = {
  val: 0,
  change: 0,
};
export const slice = createSlice({
  name: 'value',
  initialState: init,
  reducers: {
    increment: x => {
      x.val = x.val + 1;
    },
    decrement: x => {
      x.val = x.val - 1;
    },
    incByA: (state, action) => {
      state.val = state.val + action.payload;
    },
    decbyA: (state, action) => {
      state.val = state.val - action.payload;
    },
  },
});
export const { increment, decrement, incByA, decbyA } = slice.actions;
export default slice.reducer;
