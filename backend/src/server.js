import express from 'express';
import http from 'http';
import socketIO from 'socket.io';
import uuid from 'uuid';


const app = express();

// const server = http.createServer(app);

const server = app.listen(8080);

const io = socketIO.listen(server);

const messages = [];

io.sockets.on('connection', async (socket) => {
  console.log('socket connected:', socket.id);

  socket.emit('chat.join', socket.id);

  socket.on('chat.send', ({ userName, text}) => {

    const message = {
      id: uuid.v4(),
      text,
      userId: socket.id,
      userName,
      dateTime: new Date().toJSON()
    };

    messages.push(message);

    io.sockets.emit('chat.receive', message);
  });

  socket.on('disconnect', function () {
    console.log('socket disconnect:', socket.id);
  });

  socket.on('error', function (err) {
    console.log('received error from socket:', socket.id);
  })
});


// app.listen(4123,() => {
//     console.log("Server is running in port 4123");
// })
