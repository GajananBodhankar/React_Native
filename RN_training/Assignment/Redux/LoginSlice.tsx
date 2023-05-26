import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
interface InterLog {
  status: 'idle' | 'fulfilled' | 'pending' | 'rejected';
}
const LoginObj: InterLog = {
  status: 'idle',
};
export const loginValidate = createAsyncThunk(
  'hello',
  async ({ user, pwd }: any) => {
    const res = await axios.post('https://fakestoreapi.com/auth/login', {
      username: user,
      password: pwd,
    });
  },
);
export const LoginSlice = createSlice({
  name: 'Login',
  initialState: LoginObj,
  reducers: {
    delLogin: (state, action) => {
      if (action.payload == 'logout') {
        state.status = 'idle';
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginValidate.fulfilled, (state, action) => {
        state.status = 'fulfilled';
      })
      .addCase(loginValidate.rejected, (state, action) => {
        state.status = 'rejected';
      })
      .addCase(loginValidate.pending, (state, action) => {
        state.status = 'pending';
      });
  },
});
export const { delLogin } = LoginSlice.actions;
export const loginReducer = LoginSlice.reducer;
