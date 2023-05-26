import {createSlice} from '@reduxjs/toolkit';
interface IData {
  id: number;
  first_name: string;
  last_name: string;
}
interface IObj {
  data: IData[];
  status: 'Idle' | 'Loading' | 'succeeded' | 'failed';
  error: string | undefined;
}
const Obj: IObj = {
  data: [],
  status: 'Idle',
  error: undefined,
};
const userSlice = createSlice({
  name: 'User',
  initialState: Obj,
  reducers: {
    fetchUsers: state => {
      state.status = 'Loading';
    },
    fetchSuccess: (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload.data;
    },
    fetchFailed: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});
export const {fetchUsers, fetchSuccess, fetchFailed} = userSlice.actions;
export const sagaReducer = userSlice.reducer;
