import {configureStore, Middleware, MiddlewareArray} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './rootSaga';
import {sagaReducer} from './userSlice';
const sagaMiddleware = createSagaMiddleware();
const middleware: Middleware[] = new MiddlewareArray().concat([sagaMiddleware]);

const store = configureStore({
  reducer: {sagaReducer},
  middleware,
});

sagaMiddleware.run(rootSaga);

export default store;
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
