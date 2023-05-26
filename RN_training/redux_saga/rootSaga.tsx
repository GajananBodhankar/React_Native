import {all, fork} from 'redux-saga/effects';
import {watchFetchUsers} from './userSaga';
export function* rootSaga() {
  yield all([fork(watchFetchUsers)]);
}
