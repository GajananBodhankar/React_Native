import { configureStore } from '@reduxjs/toolkit';
import { ValueConfig } from './rindex';
const R = configureStore({
  reducer: {
    ValueConfig,
  },
});
export default R;
