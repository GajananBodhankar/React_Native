import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const Obj = {
  name: 'john',
  age: 20,
  designation: 'Associate Trainee',
};
export const fetCh = createAsyncThunk('fetch', async () => {
  const res = await axios.get('https://reqres.in/api/users?');
  return res.data.data[0].first_name;
});

const ObjSlice = createSlice({
  name: 'person',
  initialState: Obj,
  reducers: {
    upName: (state, action) => {
      state.name = action.payload;
    },
    upAge: (state, action) => {
      state.age = action.payload;
    },
    upDesg: (state, action) => {
      state.designation = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetCh.fulfilled, (state, action) => {
      state.name = action.payload;
    });
  },
});
export const { upName, upAge, upDesg } = ObjSlice.actions;
export default ObjSlice.reducer;
