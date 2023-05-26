import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
interface Itempdata {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
  bool: boolean;
}
interface Idata {
  dataComments: Itempdata[];
  status: 'Idle' | 'Loading' | 'Success' | 'Fail';
}
const Obj: Idata = {
  dataComments: [],
  status: 'Idle',
};
export const GetDataComments = createAsyncThunk('DataComments', async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/comments',
  );
  return response.data;
});
const SliceComments = createSlice({
  name: 'SliceComments',
  initialState: Obj,
  reducers: {
    update: (state, action) => {
      state.dataComments[action.payload].bool =
        !state.dataComments[action.payload].bool;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(GetDataComments.fulfilled, (state, action) => {
        state.dataComments = [];
        action.payload.forEach((i: any) => {
          if (state.dataComments.length < 25) {
            state.dataComments.push({...i, bool: false});
          }
        });

        state.status = 'Success';
      })
      .addCase(GetDataComments.rejected, state => {
        state.status = 'Fail';
      })
      .addCase(GetDataComments.pending, state => {
        state.status = 'Loading';
      });
  },
});
export const SliceReducerComments = SliceComments.reducer;
export const {update} = SliceComments.actions;
