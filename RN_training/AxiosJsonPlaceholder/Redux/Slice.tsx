import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
interface Itempdata {
  id: number;
  username: string;
  name: string;
  email: string;
  address: Object;
  phone: string;
  website: string;
  company: Object;
}
interface Idata {
  data: Itempdata[];
  status: 'Idle' | 'Loading' | 'Success' | 'Fail';
}
const Obj: Idata = {
  data: [],
  status: 'Idle',
};
export const GetData = createAsyncThunk('Data', async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users',
  );
  return response.data;
});
const Slice = createSlice({
  name: 'Slice',
  initialState: Obj,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(GetData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'Success';
      })
      .addCase(GetData.rejected, state => {
        state.status = 'Fail';
      })
      .addCase(GetData.pending, state => {
        state.status = 'Loading';
      });
  },
});
export const SliceReducer = Slice.reducer;
