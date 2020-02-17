import express from 'express';
import socketIO from 'socket.io';
import uuid from 'uuid';

const app = express();
const server = app.listen(8080);
const io = socketIO.listen(server);

io.sockets.on('connection', async socket => {
  socket.emit('chat.join', socket.id);

  socket.on('chat.send', ({ userName, text }) => {
    const message = {
      id: uuid.v4(),
      text,
      userId: socket.id,
      userName,
      dateTime: new Date().toJSON(),
    };

    io.sockets.emit('chat.receive', message);
  });

  socket.on('disconnect', () => {
    console.log('socket disconnect:', socket.id);
  });

  socket.on('error', err => {
    console.log('received error from socket:', socket.id, err);
  });
});
