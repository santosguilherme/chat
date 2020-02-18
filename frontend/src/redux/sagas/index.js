import { all } from 'redux-saga/effects';

import chatSaga from './chat';

export default function* watchMany() {
  yield all([
    chatSaga(),
  ]);
}
