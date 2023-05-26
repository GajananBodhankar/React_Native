import {createSlice} from '@reduxjs/toolkit';
interface IObj {
  id: number;
  first_name: string;
  last_name: string;
}
interface IObj1 {
  data: IObj[];
  status: 'Idle' | 'Loading' | 'succeeded' | 'failed';
  error: string | undefined;
}
const Obj: IObj1 = {
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
      // state.id = action.payload.id;
      // state.first_name = action.payload.data[0].first_name;
      // state.last_name = action.payload.data[0].last_name;
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
