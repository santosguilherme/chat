import {
  take, put, call, fork, delay,
} from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import io from 'socket.io-client';

import {
  CONNECTED, JOINED_CHAT, RECEIVED_MESSAGE, SEND_MESSAGE,
} from 'commons/domains/chat/events';

import { actions } from '../modules/messages';
import { actions as appActions } from '../modules/app';

function* write(socket) {
  while (true) {
    const { payload } = yield take(actions.sendMessage);
    const { userName, text } = payload;

    socket.emit(SEND_MESSAGE, {
      userName,
      text,
    });
  }
}

function connect() {
  const { protocol, hostname } = window.location;
  const socket = io(`${protocol}//${hostname}:8080`);

  return new Promise(resolve => {
    socket.on(CONNECTED, () => {
      resolve(socket);
    });
  });
}

export function subscribe(socket) {
  return eventChannel(emit => {
    const update = message => emit(actions.updateMessages(message));

    socket.on(RECEIVED_MESSAGE, update);

    return () => {};
  });
}

function* read(socket) {
  const channel = yield call(subscribe, socket);

  while (true) {
    const action = yield take(channel);

    yield put(action);
  }
}

function join(socket) {
  return eventChannel(emit => {
    const update = id => emit(actions.chatJoin(id));

    socket.on(JOINED_CHAT, update);

    return () => {};
  });
}

function* readJoin(socket) {
  const channel = yield call(join, socket);

  while (true) {
    const action = yield take(channel);

    yield put(action);
  }
}

export default function* chatSaga() {
  yield take(appActions.connectWebsocket);
  const socket = yield call(connect);

  yield fork(readJoin, socket);
  yield fork(read, socket);
  yield fork(write, socket);

  yield delay(1000);
  yield put(appActions.setWebsocketConnected());
}
