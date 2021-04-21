/**
 * User saga used for API calls
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_DATA } from '../constants/appConstants';
import { fetchDataSuccess, fetchDataFailure } from '../actions/appActions';
import { getRequest, parseJSON } from '../utils/request';

/**
 * Fetch user request/response handler
 */
export function* fetchApps() {
  const requestURL = `/limit=100/json`;
  try {
    const response = yield call(getRequest, requestURL);
    const data = yield call(parseJSON, response);
    yield put(fetchDataSuccess(data.feed.entry));
  } catch (err) {
    yield put(fetchDataFailure(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* watchUsers() {
  yield takeLatest(FETCH_DATA, fetchApps);
}
