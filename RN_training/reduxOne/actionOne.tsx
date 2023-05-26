import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface In {
  id: number;
  name: string;
  age: number;
}
const ObjOne: In = {
  id: 1,
  name: 'gajanan',
  age: 22,
};
export const fetchOne = createAsyncThunk('fetch', async () => {
  const res = await axios.get('https://reqres.in/api/users?');
  return [res.data.data[0].first_name, res.data.data[3].id];
});
// export const fetchId = createAsyncThunk('fetchId', async () => {
//   const response = await axios.get('https://reqres.in/api/users?');
//   return response.data.data[0].id;
// });
export const SliceOne = createSlice({
  name: 'One',
  initialState: ObjOne,
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeAge: (state, action) => {
      state.age = action.payload;
    },
    changeId: (state, action) => {
      state.id = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchOne.fulfilled, (state, action) => {
      {
        state.name = action.payload[0];
        state.id = action.payload[1];
      }
    });
  },
  //   extraReducers: x => {
  //     x.addCase(fetchId.fulfilled, (state, action) => {
  //       state.id = action.payload;
  //     });
  //   },
});

export const { changeName, changeAge, changeId } = SliceOne.actions;
export default SliceOne.reducer;
