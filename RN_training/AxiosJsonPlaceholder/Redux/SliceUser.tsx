import {createSlice} from '@reduxjs/toolkit';

interface Idata {
  currentUser: number;
}
const Obj: Idata = {
  currentUser: 0,
};

const SlicePosts = createSlice({
  name: 'SlicePosts',
  initialState: Obj,
  reducers: {
    nowUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});
export const SliceReducerUser = SlicePosts.reducer;
export const {nowUser} = SlicePosts.actions;
