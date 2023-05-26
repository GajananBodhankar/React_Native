import {call, put, takeLatest} from 'redux-saga/effects';
import axios, {AxiosResponse} from 'axios';
import {fetchSuccess, fetchFailed, fetchUsers} from './userSlice';
export function* fetchUsersApi() {
  try {
    const response: AxiosResponse = yield call(
      axios.get,
      'https://reqres.in/api/users?',
    );
    console.log(response);
    yield put(fetchSuccess(response.data));
  } catch ({error}: any) {
    yield put(fetchFailed(error));
  }
}
export function* watchFetchUsers() {
  yield takeLatest(fetchUsers, fetchUsersApi);
}
