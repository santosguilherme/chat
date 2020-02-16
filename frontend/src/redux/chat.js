import {take, put, call, fork, delay} from 'redux-saga/effects';
import {eventChannel} from 'redux-saga';

import io from 'socket.io-client';

import {actions} from './modules/messages';
import {actions as appActions} from './modules/app';

function* write(socket) {
  while (true) {
    const {payload} = yield take(actions.sendMessage);
    const {userName, text} = payload;

    socket.emit('chat.send', {
      userName,
      text
    });
  }
}

function connect() {
  const socket = io('http://192.168.15.17:8080/');
  return new Promise(resolve => {
    socket.on('connect', () => {
      resolve(socket);
    });
  });
}

export function subscribe(socket) {
  return eventChannel(emit => {
    const update = message => {
      return emit(actions.updateMessages(message));
    };

    socket.on('chat.receive', update);

    return () => {
    };
  });
}

function* read(socket) {
  const channel = yield call(subscribe, socket);

  while (true) {
    let action = yield take(channel);

    yield put(action);
  }
}

function join(socket) {
  return eventChannel(emit => {
    const update = id => {
      return emit(actions.chatJoin(id));
    };

    socket.on('chat.join', update);

    return () => {
    };
  });
}

function* readJoin(socket) {
  const channel = yield call(join, socket);

  while (true) {
    let action = yield take(channel);

    yield put(action);
  }
}

export function* flow() {
  yield take(appActions.connectWebsocket);
  const socket = yield call(connect);

  yield fork(readJoin, socket);
  yield fork(read, socket);
  yield fork(write, socket);

  yield delay(1000);
  yield put(appActions.setWebsocketConnected());
}

export default function* rootSaga() {
  yield fork(flow);
}
