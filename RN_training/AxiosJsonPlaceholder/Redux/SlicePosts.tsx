import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
interface Itempdata {
  userId: number;
  id: number;
  title: string;
  body: any;
  bool: boolean;
}
interface Idata {
  dataPosts: Itempdata[];
  status: 'Idle' | 'Loading' | 'Success' | 'Fail';
}
const Obj: Idata = {
  dataPosts: [],
  status: 'Idle',
};
export const GetDataPosts = createAsyncThunk('DataPosts', async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts',
  );
  return response.data;
});
const SlicePosts = createSlice({
  name: 'SlicePosts',
  initialState: Obj,
  reducers: {
    update: (state, action) => {
      state.dataPosts[action.payload].bool =
        !state.dataPosts[action.payload].bool;
      console.log(state.dataPosts[action.payload].bool);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(GetDataPosts.fulfilled, (state, action) => {
        state.dataPosts = [];
        action.payload.forEach((i: any) => {
          state.dataPosts.push({...i, bool: false});
        });
        state.status = 'Success';
      })
      .addCase(GetDataPosts.rejected, state => {
        state.status = 'Fail';
      })
      .addCase(GetDataPosts.pending, state => {
        state.status = 'Loading';
      });
  },
});
export const SliceReducerPosts = SlicePosts.reducer;
export const {update} = SlicePosts.actions;
