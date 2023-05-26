import {call, put, takeLatest} from 'redux-saga/effects';
//import axios from './axios';
import axios, {AxiosResponse} from 'axios';
import {fetchSuccess, fetchFailed, fetchUsers} from './userSlice';
export function* fetchUsersApi() {
  try {
    const response: AxiosResponse = yield call(
      axios.get,
      'https://reqres.in/api/users?',
    );
    yield put(fetchSuccess(response.data));
  } catch ({error}) {
    yield put(fetchFailed(error));
  }
}
export function* watchFetchUsers() {
  yield takeLatest(fetchUsers, fetchUsersApi);
}
