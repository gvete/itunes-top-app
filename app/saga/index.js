/**
 * Gets the repositories of the user from Github
 */

import { all } from 'redux-saga/effects';
import watchUsers from './appSaga';

export default function* rootSaga() {
  yield all([watchUsers()]);
}
