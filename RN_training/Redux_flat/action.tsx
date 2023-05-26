import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
interface User {
  first_name: string;
  id: number;
  last_name: string;
}
interface UserState {
  user: User[];
  status: 'idle' | 'fulfilled' | 'pending' | 'unsuccessful';
  error: undefined;
}
const UserObj = {
  user: [],
  status: 'idle',
  error: undefined,
};
export const fetchData = createAsyncThunk('fetchData', async () => {
  const res = await axios.get('https://reqres.in/api/users?');
  return res.data.data;
});

const Slice = createSlice({
  name: 'User',
  initialState: UserObj,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.user = state.user.concat(action.payload);
        state.status = 'fulfilled';
      })
      .addCase(fetchData.pending, (state, action) => {
        state.status = 'pending';
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'unsuccessful';
      });
  },
});
export default Slice.reducer;
