import { createSlice } from '@reduxjs/toolkit';
interface I {
  Array: number[];
  status: 'empty' | 'Element not found';
}
const ArrayObj: I = {
  Array: [],
  status: 'empty',
};
const SliceArray = createSlice({
  name: 'Array',
  initialState: ArrayObj,
  reducers: {
    addItem: (state, action) => {
      state.Array.push(action.payload);
    },
    deleteItem: (state, action) => {
      if (state.Array.includes(action.payload)) {
        var count = 0;
        const arr = state.Array.filter(i => {
          if (i != action.payload) {
            return i;
          } else {
            count++;
            if (count > 1) {
              return i;
            }
          }
        });
        state.Array = arr;
      } else {
        state.status = 'empty';
      }
    },
  },
});
export const { addItem, deleteItem } = SliceArray.actions;
export default SliceArray.reducer;
