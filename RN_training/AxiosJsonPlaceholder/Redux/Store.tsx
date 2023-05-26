import {configureStore} from '@reduxjs/toolkit';
import {SliceReducer} from './Slice';
import {SliceReducerTodo} from '../ReduxTodo/SliceTodo';
import {SliceReducerPosts} from './SlicePosts';
import {SliceReducerComments} from './SliceComments';
import {SliceReducerUser} from './SliceUser';
const Store = configureStore({
  reducer: {
    SliceReducer,
    SliceReducerTodo,
    SliceReducerPosts,
    SliceReducerComments,
    SliceReducerUser,
  },
});
export default Store;
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
