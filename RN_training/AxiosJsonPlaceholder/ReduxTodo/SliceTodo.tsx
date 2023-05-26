import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
interface Itempdata {
  userId: number;
  id: number;
  title: string;
  completed: any;
}
interface Idata {
  dataTodo: Itempdata[];
  status: 'Idle' | 'Loading' | 'Success' | 'Fail';
}
const Obj: Idata = {
  dataTodo: [],
  status: 'Idle',
};
export const GetDataTodo = createAsyncThunk('Datatodo', async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/todos',
  );
  return response.data;
});
const Slice = createSlice({
  name: 'Slice',
  initialState: Obj,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(GetDataTodo.fulfilled, (state, action) => {
        state.dataTodo = action.payload;
        state.status = 'Success';
      })
      .addCase(GetDataTodo.rejected, state => {
        state.status = 'Fail';
      })
      .addCase(GetDataTodo.pending, state => {
        state.status = 'Loading';
      });
  },
});
export const SliceReducerTodo = Slice.reducer;
